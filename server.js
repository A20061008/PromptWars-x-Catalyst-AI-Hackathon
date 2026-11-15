'use strict';

const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');

const MAX_BODY_BYTES = 64 * 1024;
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;
const LOGIN_MAX_ATTEMPTS = 5;
const STATIC_FILES = new Map([
  ['/', ['Index.html', 'text/html; charset=utf-8']],
  ['/Index.html', ['Index.html', 'text/html; charset=utf-8']],
  ['/styles.css', ['styles.css', 'text/css; charset=utf-8']],
  ['/app.js', ['app.js', 'text/javascript; charset=utf-8']]
]);

class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

function localDateOffset(days) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function seedState() {
  return {
    format: 'everwell-care-state',
    version: 1,
    doses: [
      { name: 'Vitamin D3', details: '1 softgel · with breakfast', time: '8:00 AM', icon: '☀️', taken: true },
      { name: 'Amlodipine', details: '5 mg · after breakfast', time: '8:30 AM', icon: '🌿', taken: true },
      { name: 'Calcium + D', details: '1 tablet · with water', time: '1:00 PM', icon: '💧', taken: false },
      { name: 'Evening medicine', details: 'As prescribed · after dinner', time: '8:00 PM', icon: '🌙', taken: false }
    ],
    appointments: [
      { name: 'Dr. Meera Shah', kind: 'Cardiology · City Care Clinic', time: '10:30 AM', place: 'City Care Clinic', date: localDateOffset(1) },
      { name: 'Annual wellness check', kind: 'Dr. Arjun Rao · Family medicine', time: '11:00 AM', place: 'Sunrise Medical Centre', date: localDateOffset(5) }
    ],
    routines: [
      { icon: '💧', name: 'drinking', note: '8:30 AM · morning', done: true },
      { icon: '🧘', name: 'gentleMovement', note: '10:00 AM · 10 min', done: false },
      { icon: '🌱', name: 'walkOutside', note: '5:30 PM · if you feel up to it', done: false }
    ]
  };
}

function isString(value, maxLength) {
  return typeof value === 'string' && value.length <= maxLength;
}

function isNonEmptyString(value, maxLength) {
  return isString(value, maxLength) && value.trim().length > 0;
}

function isValidDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = Date.parse(`${value}T00:00:00.000Z`);
  return !Number.isNaN(parsed) && new Date(parsed).toISOString().slice(0, 10) === value;
}

function validateList(value, field, validateItem, maxItems) {
  if (!Array.isArray(value) || value.length > maxItems) {
    throw new HttpError(400, `Invalid ${field} list.`);
  }
  if (!value.every(validateItem)) throw new HttpError(400, `Invalid ${field} entry.`);
  return value;
}

function validateState(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new HttpError(400, 'Expected a care-data object.');
  }
  const doses = validateList(payload.doses, 'medicine', item =>
    item && isNonEmptyString(item.name, 100) && isString(item.details || '', 160) &&
    isString(item.time || '', 40) && isString(item.icon || '', 16) &&
    typeof item.taken === 'boolean', 100);
  const appointments = validateList(payload.appointments, 'appointment', item =>
    item && isNonEmptyString(item.name, 120) && isString(item.kind || '', 160) &&
    isString(item.place || '', 120) && isString(item.location || '', 120) &&
    isString(item.time || '', 40) && isString(item.date, 10) &&
    isValidDate(item.date), 100);
  const routines = validateList(payload.routines, 'routine', item =>
    item && isNonEmptyString(item.name, 60) && isString(item.icon || '', 16) &&
    isString(item.note || '', 120) && typeof item.done === 'boolean', 30);
  return { doses, appointments, routines };
}

function validateTaskInput(payload) {
  const categories = ['care', 'medication', 'appointment', 'contact', 'other'];
  if (!payload || typeof payload !== 'object' || Array.isArray(payload) ||
    !isNonEmptyString(payload.title, 100) || !isString(payload.details || '', 500) ||
    !categories.includes(payload.category) || !['normal', 'urgent'].includes(payload.priority)) {
    throw new HttpError(400, 'Enter a title, category, priority, and details up to 500 characters.');
  }
  return {
    title: payload.title.trim(),
    details: (payload.details || '').trim(),
    category: payload.category,
    priority: payload.priority
  };
}

function medicationId(dose) {
  return crypto.createHash('sha256')
    .update(JSON.stringify([dose.name, dose.details || '', dose.time || '', dose.taken]))
    .digest('hex').slice(0, 24);
}

function validEmail(value) {
  return typeof value === 'string' && value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function hashPassword(password, salt = crypto.randomBytes(16)) {
  return {
    salt: salt.toString('base64url'),
    hash: crypto.scryptSync(password, salt, 64).toString('base64url')
  };
}

function verifyPassword(password, saltValue, hashValue) {
  const salt = Buffer.from(saltValue, 'base64url');
  const expected = Buffer.from(hashValue, 'base64url');
  if (salt.length !== 16 || expected.length !== 64) return false;
  const actual = crypto.scryptSync(password, salt, 64);
  return crypto.timingSafeEqual(actual, expected);
}

function readCookie(request, name) {
  const cookie = request.headers.cookie || '';
  const entry = cookie.split(';').map(part => part.trim()).find(part => part.startsWith(`${name}=`));
  return entry ? entry.slice(name.length + 1) : '';
}

function sendJson(response, status, value, headers = {}) {
  const body = JSON.stringify(value);
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(body),
    'Cache-Control': 'no-store',
    ...headers
  });
  response.end(body);
}

async function readJson(request) {
  const chunks = [];
  let bytes = 0;
  for await (const chunk of request) {
    bytes += chunk.length;
    if (bytes > MAX_BODY_BYTES) throw new HttpError(413, 'Request body is too large.');
    chunks.push(chunk);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw new HttpError(400, 'Request body must be valid JSON.');
  }
}

function createServer(options = {}) {
  const pin = options.pin || process.env.DEMO_PIN || '1234';
  if (!/^\d{4}$/.test(pin)) throw new Error('DEMO_PIN must be exactly four digits.');
  const adminPin = options.adminPin || process.env.ADMIN_PIN || '5678';
  if (!/^\d{4}$/.test(adminPin)) throw new Error('ADMIN_PIN must be exactly four digits.');
  if (adminPin === pin) throw new Error('ADMIN_PIN must differ from DEMO_PIN.');
  const dataDir = options.dataDir || path.join(__dirname, 'data');
  const dataFile = path.join(dataDir, 'care-state.json');
  const accountsFile = path.join(dataDir, 'accounts.json');
  const tasksFile = path.join(dataDir, 'care-tasks.json');
  const sessions = new Map();
  const loginAttempts = new Map();
  const secureCookies = options.secureCookies ?? process.env.COOKIE_SECURE === 'true';
  let writeQueue = Promise.resolve();
  let accountWriteQueue = Promise.resolve();
  let taskWriteQueue = Promise.resolve();

  async function readState() {
    await fs.mkdir(dataDir, { recursive: true });
    try {
      const state = JSON.parse(await fs.readFile(dataFile, 'utf8'));
      if (state.format !== 'everwell-care-state' || state.version !== 1) {
        throw new Error('Care data format is not supported.');
      }
      let checked;
      try {
        checked = validateState(state);
      } catch (error) {
        throw new Error('Care data file contains invalid records.', { cause: error });
      }
      return { format: state.format, version: state.version, ...checked };
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      const initial = seedState();
      await writeState(initial);
      return initial;
    }
  }

  async function writeState(state) {
    await fs.mkdir(dataDir, { recursive: true });
    const temporary = `${dataFile}.${process.pid}.${crypto.randomBytes(6).toString('hex')}.tmp`;
    try {
      await fs.writeFile(temporary, JSON.stringify(state, null, 2), { encoding: 'utf8', mode: 0o600 });
      await fs.rename(temporary, dataFile);
    } catch (error) {
      await fs.rm(temporary, { force: true }).catch(() => {});
      throw error;
    }
  }

  async function readAccounts() {
    try {
      const state = JSON.parse(await fs.readFile(accountsFile, 'utf8'));
      if (state.format !== 'everwell-accounts' || state.version !== 1 || !Array.isArray(state.accounts) ||
        !state.accounts.every(account => account && typeof account.id === 'string' &&
          isNonEmptyString(account.name, 80) && validEmail(account.email) &&
          typeof account.salt === 'string' && typeof account.passwordHash === 'string' &&
          typeof account.createdAt === 'string')) {
        throw new Error('Account data format is not supported.');
      }
      return state;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      return { format: 'everwell-accounts', version: 1, accounts: [] };
    }
  }

  async function writeAccounts(state) {
    await fs.mkdir(dataDir, { recursive: true });
    const temporary = `${accountsFile}.${process.pid}.${crypto.randomBytes(6).toString('hex')}.tmp`;
    try {
      await fs.writeFile(temporary, JSON.stringify(state, null, 2), { encoding: 'utf8', mode: 0o600 });
      await fs.rename(temporary, accountsFile);
    } catch (error) {
      await fs.rm(temporary, { force: true }).catch(() => {});
      throw error;
    }
  }

  async function readTasks() {
    await fs.mkdir(dataDir, { recursive: true });
    try {
      const state = JSON.parse(await fs.readFile(tasksFile, 'utf8'));
      const validTask = task => task && typeof task.id === 'string' &&
        typeof task.requesterId === 'string' &&
        ['guest', 'member'].includes(task.requesterRole) &&
        isNonEmptyString(task.requesterName, 80) &&
        isNonEmptyString(task.title, 100) && isString(task.details || '', 500) &&
        ['care', 'medication', 'appointment', 'contact', 'other'].includes(task.category) &&
        ['normal', 'urgent'].includes(task.priority) &&
        ['open', 'in_progress', 'completed'].includes(task.status) &&
        isString(task.adminNote || '', 500) &&
        typeof task.createdAt === 'string' && typeof task.updatedAt === 'string';
      const validReview = review => review && /^[a-f0-9]{24}$/.test(review.medicationId) &&
        isNonEmptyString(review.medicineName, 100) && isString(review.details || '', 160) &&
        isString(review.time || '', 40) && isNonEmptyString(review.reviewedBy, 80) &&
        typeof review.reviewedAt === 'string';
      if (state.format !== 'everwell-care-tasks' || state.version !== 1 ||
        !Array.isArray(state.tasks) || state.tasks.length > 500 || !state.tasks.every(validTask) ||
        !Array.isArray(state.medicationReviews) || state.medicationReviews.length > 100 ||
        !state.medicationReviews.every(validReview)) {
        throw new Error('Care task data format is not supported or contains invalid records.');
      }
      return state;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      const initial = { format: 'everwell-care-tasks', version: 1, tasks: [], medicationReviews: [] };
      await writeTasks(initial);
      return initial;
    }
  }

  async function writeTasks(state) {
    await fs.mkdir(dataDir, { recursive: true });
    const temporary = `${tasksFile}.${process.pid}.${crypto.randomBytes(6).toString('hex')}.tmp`;
    try {
      await fs.writeFile(temporary, JSON.stringify(state, null, 2), { encoding: 'utf8', mode: 0o600 });
      await fs.rename(temporary, tasksFile);
    } catch (error) {
      await fs.rm(temporary, { force: true }).catch(() => {});
      throw error;
    }
  }

  function createSession(response, user, now = Date.now(), status = 200) {
    const token = crypto.randomBytes(32).toString('base64url');
    const session = { principalId: user.principalId || crypto.randomUUID(), expiresAt: now + SESSION_TTL_MS, ...user };
    sessions.set(token, session);
    const cookie = `everwell_session=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${SESSION_TTL_MS / 1000}${secureCookies ? '; Secure' : ''}`;
    sendJson(response, status, { ok: true, role: session.role, name: session.name }, { 'Set-Cookie': cookie });
  }

  function getSession(request) {
    const token = readCookie(request, 'everwell_session');
    const session = sessions.get(token);
    if (!session || session.expiresAt <= Date.now()) {
      if (session) sessions.delete(token);
      throw new HttpError(401, 'Please enter your family access PIN again.');
    }
    session.expiresAt = Date.now() + SESSION_TTL_MS;
    return session;
  }

  function checkSameOrigin(request) {
    const origin = request.headers.origin;
    if (!origin) return;
    try {
      if (new URL(origin).host !== request.headers.host) throw new HttpError(403, 'Cross-origin request denied.');
    } catch (error) {
      if (error instanceof HttpError) throw error;
      throw new HttpError(403, 'Invalid request origin.');
    }
  }

  const server = http.createServer(async (request, response) => {
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('X-Frame-Options', 'DENY');
    response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(self)');
    response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'");

    try {
      const url = new URL(request.url, 'http://127.0.0.1');
      if (url.pathname === '/api/health' && request.method === 'GET') {
        return sendJson(response, 200, { ok: true, service: 'everwell-demo-api' });
      }

      if (url.pathname === '/api/login' && request.method === 'POST') {
        checkSameOrigin(request);
        const input = await readJson(request);
        if (!input || typeof input !== 'object' || Array.isArray(input)) {
          throw new HttpError(400, 'Expected sign-in details.');
        }
        if (input.mode === 'guest') {
          return createSession(response, { role: 'guest', name: 'Guest' });
        }
        const address = request.socket.remoteAddress || 'unknown';
        const now = Date.now();
        const attempt = loginAttempts.get(address);
        if (attempt && now - attempt.startedAt < LOGIN_WINDOW_MS && attempt.count >= LOGIN_MAX_ATTEMPTS) {
          throw new HttpError(429, 'Too many attempts. Please wait 15 minutes and try again.');
        }
        let user = null;
        if (input.mode === 'account' && validEmail(input.email) &&
          typeof input.password === 'string' && input.password.length <= 128) {
          const accountState = await readAccounts();
          const email = input.email.trim().toLowerCase();
          const account = accountState.accounts.find(item => item.email === email);
          if (account && verifyPassword(input.password, account.salt, account.passwordHash)) {
            user = { role: 'member', name: account.name, principalId: account.id };
          }
        } else if (input.mode === 'admin') {
          const provided = typeof input.pin === 'string' ? input.pin : '';
          if (/^\d{4}$/.test(provided) &&
            crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(adminPin))) {
            user = { role: 'admin', name: 'Administrator', principalId: 'administrator' };
          }
        } else if (!input.mode || input.mode === 'pin') {
          const provided = typeof input.pin === 'string' ? input.pin : '';
          if (/^\d{4}$/.test(provided) &&
            crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(pin))) {
            user = { role: 'member', name: 'Ananya Rao', principalId: 'family-pin-member' };
          }
        } else if (input.mode !== 'account') {
          throw new HttpError(400, 'Unsupported sign-in method.');
        }
        if (!user) {
          const current = attempt && now - attempt.startedAt < LOGIN_WINDOW_MS
            ? attempt : { startedAt: now, count: 0 };
          current.count += 1;
          loginAttempts.set(address, current);
          throw new HttpError(401, 'The sign-in details were not recognized. Please try again.');
        }
        loginAttempts.delete(address);
        return createSession(response, user, now);
      }

      if (url.pathname === '/api/register' && request.method === 'POST') {
        checkSameOrigin(request);
        const input = await readJson(request);
        if (!input || typeof input !== 'object' || Array.isArray(input) ||
          !isNonEmptyString(input.name, 80) || input.name.trim().length < 2 ||
          !validEmail(input.email) || typeof input.password !== 'string' ||
          input.password.length < 8 || input.password.length > 128) {
          throw new HttpError(400, 'Enter a name, valid email, and password with at least 8 characters.');
        }
        const email = input.email.trim().toLowerCase();
        accountWriteQueue = accountWriteQueue.catch(() => {}).then(async () => {
          const accountState = await readAccounts();
          if (accountState.accounts.some(account => account.email === email)) {
            throw new HttpError(409, 'An account with that email already exists.');
          }
          const credentials = hashPassword(input.password);
          const account = {
            id: crypto.randomUUID(),
            name: input.name.trim(),
            email,
            salt: credentials.salt,
            passwordHash: credentials.hash,
            createdAt: new Date().toISOString()
          };
          accountState.accounts.push(account);
          await writeAccounts(accountState);
          return account;
        });
        const account = await accountWriteQueue;
        return createSession(response, { role: 'member', name: account.name, principalId: account.id }, Date.now(), 201);
      }

      if (url.pathname === '/api/logout' && request.method === 'POST') {
        const token = readCookie(request, 'everwell_session');
        sessions.delete(token);
        return sendJson(response, 200, { ok: true }, {
          'Set-Cookie': 'everwell_session=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0'
        });
      }

      if (url.pathname === '/api/session' && request.method === 'GET') {
        const session = getSession(request);
        return sendJson(response, 200, { authenticated: true, role: session.role, name: session.name });
      }

      if (url.pathname === '/api/state' && request.method === 'GET') {
        getSession(request);
        const state = await readState();
        return sendJson(response, 200, {
          doses: state.doses,
          appointments: state.appointments,
          routines: state.routines
        });
      }

      if (url.pathname === '/api/state' && request.method === 'PUT') {
        checkSameOrigin(request);
        getSession(request);
        const update = validateState(await readJson(request));
        writeQueue = writeQueue.catch(() => {}).then(async () => {
          const current = await readState();
          const next = { format: current.format, version: current.version, ...update };
          await writeState(next);
          return next;
        });
        const saved = await writeQueue;
        return sendJson(response, 200, {
          doses: saved.doses,
          appointments: saved.appointments,
          routines: saved.routines
        });
      }

      if (url.pathname === '/api/tasks' && request.method === 'GET') {
        const session = getSession(request);
        const state = await readTasks();
        const tasks = session.role === 'admin'
          ? state.tasks
          : state.tasks.filter(task => task.requesterId === session.principalId);
        return sendJson(response, 200, { tasks: tasks.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt)) });
      }

      if (url.pathname === '/api/tasks' && request.method === 'POST') {
        checkSameOrigin(request);
        const session = getSession(request);
        if (session.role === 'admin') throw new HttpError(403, 'Administrators cannot submit household requests.');
        const input = validateTaskInput(await readJson(request));
        const now = new Date().toISOString();
        const task = {
          id: crypto.randomUUID(),
          requesterId: session.principalId,
          requesterRole: session.role,
          requesterName: session.name,
          ...input,
          status: 'open',
          adminNote: '',
          createdAt: now,
          updatedAt: now
        };
        taskWriteQueue = taskWriteQueue.catch(() => {}).then(async () => {
          const state = await readTasks();
          if (state.tasks.length >= 500 || state.tasks.filter(item => item.requesterId === session.principalId).length >= 50) {
            throw new HttpError(429, 'The care request limit has been reached. Please contact the administrator directly.');
          }
          state.tasks.push(task);
          await writeTasks(state);
        });
        await taskWriteQueue;
        return sendJson(response, 201, { task });
      }

      const taskMatch = url.pathname.match(/^\/api\/tasks\/([0-9a-f-]{36})$/i);
      if (taskMatch && request.method === 'PATCH') {
        checkSameOrigin(request);
        const session = getSession(request);
        if (session.role !== 'admin') throw new HttpError(403, 'Only administrators can update household requests.');
        const input = await readJson(request);
        if (!input || typeof input !== 'object' || Array.isArray(input) ||
          !['open', 'in_progress', 'completed'].includes(input.status) ||
          !isString(input.adminNote || '', 500)) {
          throw new HttpError(400, 'Provide a valid request status and update note.');
        }
        let updated;
        taskWriteQueue = taskWriteQueue.catch(() => {}).then(async () => {
          const state = await readTasks();
          const index = state.tasks.findIndex(task => task.id === taskMatch[1]);
          if (index < 0) throw new HttpError(404, 'Care request not found.');
          updated = { ...state.tasks[index], status: input.status, adminNote: (input.adminNote || '').trim(), updatedAt: new Date().toISOString() };
          state.tasks[index] = updated;
          await writeTasks(state);
        });
        await taskWriteQueue;
        return sendJson(response, 200, { task: updated });
      }

      if (url.pathname === '/api/admin/medications' && request.method === 'GET') {
        const session = getSession(request);
        if (session.role !== 'admin') throw new HttpError(403, 'Administrator access is required.');
        const [careState, taskState] = await Promise.all([readState(), readTasks()]);
        const medications = careState.doses.map(dose => {
          const id = medicationId(dose);
          return {
            id,
            name: dose.name,
            details: dose.details || '',
            time: dose.time || '',
            taken: dose.taken,
            review: taskState.medicationReviews.find(item => item.medicationId === id) || null
          };
        });
        return sendJson(response, 200, { medications });
      }

      const medicationReviewMatch = url.pathname.match(/^\/api\/admin\/medications\/([a-f0-9]{24})\/verify$/i);
      if (medicationReviewMatch && request.method === 'POST') {
        checkSameOrigin(request);
        const session = getSession(request);
        if (session.role !== 'admin') throw new HttpError(403, 'Administrator access is required.');
        let review;
        taskWriteQueue = taskWriteQueue.catch(() => {}).then(async () => {
          const [careState, taskState] = await Promise.all([readState(), readTasks()]);
          const dose = careState.doses.find(item => medicationId(item) === medicationReviewMatch[1]);
          if (!dose) throw new HttpError(404, 'The medication is no longer in the current care plan.');
          const currentMedicationIds = new Set(careState.doses.map(medicationId));
          taskState.medicationReviews = taskState.medicationReviews.filter(item => currentMedicationIds.has(item.medicationId));
          review = {
            medicationId: medicationReviewMatch[1],
            medicineName: dose.name,
            details: dose.details || '',
            time: dose.time || '',
            reviewedBy: session.name,
            reviewedAt: new Date().toISOString()
          };
          taskState.medicationReviews = taskState.medicationReviews.filter(item => item.medicationId !== review.medicationId);
          taskState.medicationReviews.push(review);
          await writeTasks(taskState);
        });
        await taskWriteQueue;
        return sendJson(response, 200, { review });
      }

      if (request.method === 'GET' && STATIC_FILES.has(url.pathname)) {
        const [fileName, contentType] = STATIC_FILES.get(url.pathname);
        const asset = await fs.readFile(path.join(__dirname, fileName));
        response.writeHead(200, {
          'Content-Type': contentType,
          'Content-Length': asset.length,
          'Cache-Control': 'no-cache'
        });
        return response.end(asset);
      }

      return sendJson(response, 404, { error: 'Not found.' });
    } catch (error) {
      const status = error instanceof HttpError ? error.status : 500;
      const message = error instanceof HttpError ? error.message : 'The demo server could not complete that request.';
      if (status === 500) process.stderr.write(`${new Date().toISOString()} ${error.stack || error}\n`);
      if (!response.headersSent) sendJson(response, status, { error: message });
      else response.destroy();
    }
  });

  return server;
}

if (require.main === module) {
  const server = createServer();
  const port = Number(process.env.PORT || 4173);
  server.listen(port, '127.0.0.1', () => {
    process.stderr.write(`Everwell demo running at http://127.0.0.1:${port}\n`);
  });
}

module.exports = { createServer, validateState };
