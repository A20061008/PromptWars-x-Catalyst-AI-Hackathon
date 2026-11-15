;(() => {
  const form = document.getElementById('userFeedbackForm')
  const submitStatus = document.getElementById('feedbackSubmitStatus')
  if (!form || !submitStatus) return

  const showSubmitStatus = message => {
    submitStatus.textContent = message
    submitStatus.classList.remove('hidden')
  }

  if (location.protocol === 'file:' || location.protocol === 'about:') {
    showSubmitStatus('Run the Python server to submit feedback for administrator review.')
    form.querySelector('button[type="submit"]').disabled = true
  } else {
    form.addEventListener('submit', async event => {
      event.preventDefault()
      const button = form.querySelector('button[type="submit"]')
      button.disabled = true
      try {
        const values = new FormData(form)
        const response = await fetch('/api/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            rating: Number(values.get('rating')),
            category: values.get('category'),
            comment: values.get('comment'),
          }),
        })
        const result = await response.json()
        if (!response.ok) throw new Error(result.error || 'Feedback could not be submitted.')
        form.reset()
        showSubmitStatus('Thank you. Your app feedback was sent to the administrator.')
      } catch (error) {
        showSubmitStatus(error.message || 'Feedback could not be submitted.')
      } finally {
        button.disabled = false
      }
    })
  }

  const adminPage = document.getElementById('adminPage')
  const feedbackList = document.getElementById('adminFeedbackList')
  const feedbackSummary = document.getElementById('adminFeedbackSummary')
  const activityList = document.getElementById('adminRecentActivity')
  if (!adminPage || !feedbackList || !feedbackSummary || !activityList) return

  const formatDate = value => {
    const date = new Date(value)
    if (Number.isNaN(date.getTime())) return value || 'Unknown time'
    const locale = document.getElementById('language').value || 'en'
    return new Intl.DateTimeFormat(locale, { dateStyle: 'medium', timeStyle: 'short' }).format(date)
  }

  const addActivity = (kind, title, detail, timestamp) => ({
    kind,
    title,
    detail,
    timestamp: new Date(timestamp).getTime(),
    formattedTime: formatDate(timestamp),
  })

  function renderActivity(tasks, medications, feedback) {
    const events = [
      ...tasks.map(task =>
        addActivity(
          'Care request',
          task.title,
          `${task.requesterRole === 'guest' ? 'Guest' : 'Member'} · ${task.status.replace('_', ' ')}`,
          task.updatedAt || task.createdAt,
        ),
      ),
      ...medications
        .filter(item => item.review)
        .map(item =>
          addActivity(
            'Medication reviewed',
            item.name,
            `Reviewed by ${item.review.reviewedBy}`,
            item.review.reviewedAt,
          ),
        ),
      ...feedback.map(item =>
        addActivity(
          'App feedback',
          `${item.rating}/5 · ${item.category}`,
          item.role === 'guest' ? 'Guest' : 'Member',
          item.createdAt,
        ),
      ),
    ]
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, 8)

    activityList.replaceChildren()
    if (!events.length) {
      const empty = document.createElement('p')
      empty.className = 'muted'
      empty.textContent = 'No recent activity yet.'
      activityList.appendChild(empty)
      return
    }

    events.forEach(event => {
      const row = document.createElement('article')
      row.className = 'admin-activity-item'
      const copy = document.createElement('div')
      const type = document.createElement('span')
      type.className = 'admin-activity-type'
      type.textContent = event.kind
      const title = document.createElement('strong')
      title.textContent = event.title
      const detail = document.createElement('span')
      detail.className = 'muted'
      detail.textContent = event.detail
      const time = document.createElement('time')
      time.dateTime = new Date(event.timestamp).toISOString()
      time.textContent = event.formattedTime
      copy.append(type, title, detail)
      row.append(copy, time)
      activityList.appendChild(row)
    })
  }

  function renderFeedback(entries, summary) {
    const average = document.getElementById('adminAverageFeedback')
    const newCount = document.getElementById('adminNewFeedbackCount')
    average.textContent = summary.averageRating === null ? '—' : `${summary.averageRating} / 5`
    newCount.textContent = summary.newCount
      ? `${summary.newCount} awaiting review`
      : 'No new ratings'
    feedbackSummary.textContent = summary.count
      ? `${summary.count} response${summary.count === 1 ? '' : 's'} · ${summary.newCount} awaiting review · average ${summary.averageRating}/5`
      : 'No app feedback has been submitted yet.'
    feedbackList.replaceChildren()

    if (!entries.length) return
    const categories = {
      ease: 'Ease of use',
      features: 'Features',
      accessibility: 'Accessibility',
      reliability: 'Reliability',
      other: 'Other',
    }

    entries.forEach(entry => {
      const card = document.createElement('article')
      card.className = 'admin-feedback-item'
      const header = document.createElement('div')
      header.className = 'admin-feedback-header'
      const score = document.createElement('strong')
      score.textContent = `${entry.rating} / 5 · ${categories[entry.category] || 'Other'}`
      const status = document.createElement('span')
      status.className = `feedback-badge ${entry.status}`
      status.textContent = entry.status === 'reviewed' ? 'Reviewed' : 'New'
      header.append(score, status)

      const metadata = document.createElement('p')
      metadata.className = 'task-meta'
      metadata.textContent = `${entry.role === 'guest' ? 'Guest' : 'Member'} · ${formatDate(entry.createdAt)}`
      const comment = document.createElement('p')
      comment.className = 'admin-feedback-comment'
      comment.textContent = entry.comment || 'No comment provided.'

      const statusLabel = document.createElement('label')
      statusLabel.textContent = 'Review status'
      const statusSelect = document.createElement('select')
      statusSelect.dataset.feedbackStatus = entry.id
      ;[
        ['new', 'New'],
        ['reviewed', 'Reviewed'],
      ].forEach(([value, label]) => {
        const option = document.createElement('option')
        option.value = value
        option.textContent = label
        statusSelect.appendChild(option)
      })
      statusSelect.value = entry.status
      statusLabel.appendChild(statusSelect)

      const noteLabel = document.createElement('label')
      noteLabel.textContent = 'Internal follow-up note'
      const note = document.createElement('textarea')
      note.rows = 2
      note.maxLength = 500
      note.value = entry.adminNote || ''
      note.dataset.feedbackNote = entry.id
      noteLabel.appendChild(note)

      const save = document.createElement('button')
      save.type = 'button'
      save.className = 'secondary'
      save.dataset.saveFeedback = entry.id
      save.textContent = 'Save review'
      card.append(header, metadata, comment, statusLabel, noteLabel, save)
      feedbackList.appendChild(card)
    })
  }

  function renderAdminEvaluation(result) {
    const tasks = result.tasks
    const completed = tasks.filter(task => task.status === 'completed').length
    const pendingUrgent = tasks.filter(
      task => task.priority === 'urgent' && task.status !== 'completed',
    ).length
    document.getElementById('adminUrgentRequestCount').textContent = pendingUrgent
    document.getElementById('adminCompletedRequestCount').textContent = `${completed} completed`
    document.getElementById('adminCompletionRate').textContent = tasks.length
      ? `${Math.round((completed / tasks.length) * 100)}%`
      : '0%'
    document.getElementById('adminMemberRequestCount').textContent = tasks.filter(
      task => task.requesterRole === 'member',
    ).length
    document.getElementById('adminGuestRequestCount').textContent = tasks.filter(
      task => task.requesterRole === 'guest',
    ).length
    renderFeedback(result.feedback.entries, result.feedback.summary)
    renderActivity(tasks, result.medications, result.feedback.entries)
  }

  window.addEventListener('everwell:admin-overview', event => {
    if (!adminPage.classList.contains('hidden')) renderAdminEvaluation(event.detail)
  })

  feedbackList.addEventListener('click', async event => {
    const button = event.target.closest('[data-save-feedback]')
    if (!button) return
    const id = button.dataset.saveFeedback
    const status = Array.from(feedbackList.querySelectorAll('[data-feedback-status]')).find(
      element => element.dataset.feedbackStatus === id,
    )
    const note = Array.from(feedbackList.querySelectorAll('[data-feedback-note]')).find(
      element => element.dataset.feedbackNote === id,
    )
    if (!status || !note) return
    button.disabled = true
    try {
      const response = await fetch(`/api/admin/feedback/${encodeURIComponent(id)}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: status.value, adminNote: note.value }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Feedback review could not be saved.')
      window.dispatchEvent(new Event('everwell:refresh-admin-overview'))
    } catch (error) {
      feedbackSummary.textContent = error.message || 'Feedback review could not be saved.'
    } finally {
      button.disabled = false
    }
  })
})()
