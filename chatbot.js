;(() => {
  const form = document.getElementById('chatForm')
  const language = document.getElementById('language')
  if (!form || location.protocol === 'file:' || location.protocol === 'about:' || !language) return

  form.addEventListener(
    'submit',
    async event => {
      if (language.value !== 'en') return
      const input = document.getElementById('chatInput')
      const question = input.value.trim()
      if (!question) return

      event.preventDefault()
      event.stopImmediatePropagation()
      const messages = document.getElementById('messages')
      const addMessage = (text, who) => {
        const bubble = document.createElement('div')
        bubble.className = `bubble${who === 'user' ? ' user' : ''}`
        bubble.textContent = text
        messages.appendChild(bubble)
        messages.scrollTop = messages.scrollHeight
      }

      addMessage(question, 'user')
      input.value = ''
      input.disabled = true
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question }),
        })
        const result = await response.json()
        if (!response.ok)
          throw new Error(result.error || 'The assistant could not answer right now.')
        addMessage(result.answer, 'assistant')
      } catch (error) {
        addMessage(error.message || 'The assistant could not answer right now.', 'assistant')
      } finally {
        input.disabled = false
        input.focus()
      }
    },
    true,
  )
})()
