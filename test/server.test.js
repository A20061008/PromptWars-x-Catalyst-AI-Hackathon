'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const { createServer } = require('../server');

test('demo API protects, validates, and persists the shared care state', async t => {
  const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'everwell-test-'));
  const server = createServer({ pin: '2468', dataDir });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => {
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
    await fs.rm(dataDir, { recursive: true, force: true });
  });

  const base = `http://127.0.0.1:${server.address().port}`;
  const stylesheet = await fetch(`${base}/styles.css`);
  assert.equal(stylesheet.status, 200);
  assert.match(stylesheet.headers.get('content-type'), /text\/css/);
  const client = await fetch(`${base}/app.js`);
  assert.equal(client.status, 200);
  assert.match(client.headers.get('content-type'), /javascript/);
  assert.equal((await fetch(`${base}/toString`)).status, 404);

  const unauthorized = await fetch(`${base}/api/state`);
  assert.equal(unauthorized.status, 401);

  const invalidLogin = await fetch(`${base}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pin: '0000' })
  });
  assert.equal(invalidLogin.status, 401);

  const login = await fetch(`${base}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pin: '2468' })
  });
  assert.equal(login.status, 200);
  const cookie = login.headers.get('set-cookie').split(';')[0];

  const initial = await fetch(`${base}/api/state`, { headers: { Cookie: cookie } });
  assert.equal(initial.status, 200);
  const initialState = await initial.json();
  assert.equal(initialState.doses.length, 4);

  const changed = { ...initialState, doses: initialState.doses.map((dose, i) => i ? dose : { ...dose, taken: false }) };
  const save = await fetch(`${base}/api/state`, {
    method: 'PUT',
    headers: { Cookie: cookie, 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify(changed)
  });
  assert.equal(save.status, 200);
  const stored = JSON.parse(await fs.readFile(path.join(dataDir, 'care-state.json'), 'utf8'));
  assert.equal(stored.doses[0].taken, false);

  const badSave = await fetch(`${base}/api/state`, {
    method: 'PUT',
    headers: { Cookie: cookie, 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify({ doses: 'not a list', appointments: [], routines: [] })
  });
  assert.equal(badSave.status, 400);

  const invalidDate = {
    ...changed,
    appointments: changed.appointments.map((appointment, i) => i ? appointment : { ...appointment, date: '2026-02-31' })
  };
  const invalidAppointment = await fetch(`${base}/api/state`, {
    method: 'PUT',
    headers: { Cookie: cookie, 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify(invalidDate)
  });
  assert.equal(invalidAppointment.status, 400);

  const crossOrigin = await fetch(`${base}/api/state`, {
    method: 'PUT',
    headers: { Cookie: cookie, 'Content-Type': 'application/json', Origin: 'https://attacker.example' },
    body: JSON.stringify(changed)
  });
  assert.equal(crossOrigin.status, 403);
});

test('demo auth supports accounts, guests, and a distinct administrator PIN', async t => {
  const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'everwell-auth-test-'));
  const server = createServer({ pin: '2468', adminPin: '1357', dataDir });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => {
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
    await fs.rm(dataDir, { recursive: true, force: true });
  });

  const base = `http://127.0.0.1:${server.address().port}`;
  const register = await fetch(`${base}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify({ name: 'Test Caregiver', email: 'CARE@example.com', password: 'secure-demo-pass' })
  });
  assert.equal(register.status, 201);
  const registeredUser = await register.json();
  assert.deepEqual({ role: registeredUser.role, name: registeredUser.name }, {
    role: 'member',
    name: 'Test Caregiver'
  });
  const userCookie = register.headers.get('set-cookie').split(';')[0];

  const storedAccounts = JSON.parse(await fs.readFile(path.join(dataDir, 'accounts.json'), 'utf8'));
  assert.equal(storedAccounts.accounts[0].email, 'care@example.com');
  assert.equal(storedAccounts.accounts[0].passwordHash.includes('secure-demo-pass'), false);

  const duplicate = await fetch(`${base}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify({ name: 'Another Caregiver', email: 'care@example.com', password: 'another-demo-pass' })
  });
  assert.equal(duplicate.status, 409);

  const accountLogin = await fetch(`${base}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify({ mode: 'account', email: 'Care@example.com', password: 'secure-demo-pass' })
  });
  assert.equal(accountLogin.status, 200);
  assert.equal((await accountLogin.json()).role, 'member');

  const guestLogin = await fetch(`${base}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify({ mode: 'guest' })
  });
  assert.equal(guestLogin.status, 200);
  assert.equal((await guestLogin.json()).role, 'guest');
  const guestCookie = guestLogin.headers.get('set-cookie').split(';')[0];

  const adminLogin = await fetch(`${base}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify({ mode: 'admin', pin: '1357' })
  });
  assert.equal(adminLogin.status, 200);
  assert.equal((await adminLogin.json()).role, 'admin');
  const adminCookie = adminLogin.headers.get('set-cookie').split(';')[0];

  const session = await fetch(`${base}/api/session`, { headers: { Cookie: userCookie } });
  assert.deepEqual(await session.json(), {
    authenticated: true,
    role: 'member',
    name: 'Test Caregiver'
  });

  for (const [role, cookie] of [['member', userCookie], ['guest', guestCookie], ['admin', adminCookie]]) {
    const logout = await fetch(`${base}/api/logout`, {
      method: 'POST',
      headers: { Cookie: cookie, Origin: base }
    });
    assert.equal(logout.status, 200, `${role} can log out`);
    assert.match(logout.headers.get('set-cookie'), /Max-Age=0/);
    const revokedSession = await fetch(`${base}/api/session`, { headers: { Cookie: cookie } });
    assert.equal(revokedSession.status, 401, `${role} session is revoked`);
  }

  const weakPassword = await fetch(`${base}/api/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify({ name: 'Caregiver', email: 'weak@example.com', password: 'short' })
  });
  assert.equal(weakPassword.status, 400);
});

test('care requests reach administrators and medication reviews are admin-only', async t => {
  const dataDir = await fs.mkdtemp(path.join(os.tmpdir(), 'everwell-care-desk-'));
  const server = createServer({ pin: '2468', adminPin: '1357', dataDir });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => {
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
    await fs.rm(dataDir, { recursive: true, force: true });
  });

  const base = `http://127.0.0.1:${server.address().port}`;
  async function login(body) {
    const response = await fetch(`${base}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: base },
      body: JSON.stringify(body)
    });
    assert.equal(response.status, 200);
    return response.headers.get('set-cookie').split(';')[0];
  }
  const memberCookie = await login({ mode: 'pin', pin: '2468' });
  const guestCookie = await login({ mode: 'guest' });
  const adminCookie = await login({ mode: 'admin', pin: '1357' });

  async function createRequest(cookie, title) {
    return fetch(`${base}/api/tasks`, {
      method: 'POST',
      headers: { Cookie: cookie, 'Content-Type': 'application/json', Origin: base },
      body: JSON.stringify({ title, details: 'Please help coordinate this.', category: 'care', priority: 'normal' })
    });
  }
  const memberRequest = await createRequest(memberCookie, 'Help with the care routine');
  const guestRequest = await createRequest(guestCookie, 'Please check the medicine plan');
  assert.equal(memberRequest.status, 201);
  assert.equal(guestRequest.status, 201);
  const memberTask = (await memberRequest.json()).task;
  const guestTask = (await guestRequest.json()).task;

  const memberTasks = await fetch(`${base}/api/tasks`, { headers: { Cookie: memberCookie } });
  assert.deepEqual((await memberTasks.json()).tasks.map(task => task.id), [memberTask.id]);
  const guestTasks = await fetch(`${base}/api/tasks`, { headers: { Cookie: guestCookie } });
  assert.deepEqual((await guestTasks.json()).tasks.map(task => task.id), [guestTask.id]);

  const allTasks = await fetch(`${base}/api/tasks`, { headers: { Cookie: adminCookie } });
  assert.deepEqual(new Set((await allTasks.json()).tasks.map(task => task.id)), new Set([memberTask.id, guestTask.id]));
  const forbiddenUpdate = await fetch(`${base}/api/tasks/${guestTask.id}`, {
    method: 'PATCH',
    headers: { Cookie: guestCookie, 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify({ status: 'completed', adminNote: 'Done' })
  });
  assert.equal(forbiddenUpdate.status, 403);

  const update = await fetch(`${base}/api/tasks/${guestTask.id}`, {
    method: 'PATCH',
    headers: { Cookie: adminCookie, 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify({ status: 'in_progress', adminNote: 'We are checking with the care team.' })
  });
  assert.equal(update.status, 200);
  const updatedGuestTasks = await fetch(`${base}/api/tasks`, { headers: { Cookie: guestCookie } });
  const visibleUpdate = (await updatedGuestTasks.json()).tasks[0];
  assert.equal(visibleUpdate.status, 'in_progress');
  assert.equal(visibleUpdate.adminNote, 'We are checking with the care team.');

  const invalidRequest = await fetch(`${base}/api/tasks`, {
    method: 'POST',
    headers: { Cookie: guestCookie, 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify({ title: 'Missing category' })
  });
  assert.equal(invalidRequest.status, 400);

  const notAdmin = await fetch(`${base}/api/admin/medications`, { headers: { Cookie: guestCookie } });
  assert.equal(notAdmin.status, 403);
  const medications = await fetch(`${base}/api/admin/medications`, { headers: { Cookie: adminCookie } });
  assert.equal(medications.status, 200);
  const medicationList = (await medications.json()).medications;
  assert.equal(medicationList.length, 4);
  const forbiddenReview = await fetch(`${base}/api/admin/medications/${medicationList[0].id}/verify`, {
    method: 'POST',
    headers: { Cookie: guestCookie, Origin: base }
  });
  assert.equal(forbiddenReview.status, 403);
  const review = await fetch(`${base}/api/admin/medications/${medicationList[0].id}/verify`, {
    method: 'POST',
    headers: { Cookie: adminCookie, Origin: base }
  });
  assert.equal(review.status, 200);
  const reviewed = await fetch(`${base}/api/admin/medications`, { headers: { Cookie: adminCookie } });
  const reviewedMedicine = (await reviewed.json()).medications[0];
  assert.equal(reviewedMedicine.review.reviewedBy, 'Administrator');
  assert.equal(reviewedMedicine.taken, true);

  const memberStateResponse = await fetch(`${base}/api/state`, { headers: { Cookie: memberCookie } });
  const memberState = await memberStateResponse.json();
  const updatedState = {
    ...memberState,
    doses: memberState.doses.map((dose, index) => index === 0 ? { ...dose, taken: false } : dose)
  };
  const stateUpdate = await fetch(`${base}/api/state`, {
    method: 'PUT',
    headers: { Cookie: memberCookie, 'Content-Type': 'application/json', Origin: base },
    body: JSON.stringify(updatedState)
  });
  assert.equal(stateUpdate.status, 200);
  const currentMedications = await fetch(`${base}/api/admin/medications`, { headers: { Cookie: adminCookie } });
  const changedMedicine = (await currentMedications.json()).medications[0];
  assert.equal(changedMedicine.taken, false);
  assert.equal(changedMedicine.review, null);

  const persistedTasks = JSON.parse(await fs.readFile(path.join(dataDir, 'care-tasks.json'), 'utf8'));
  assert.equal(persistedTasks.tasks.length, 2);
});
