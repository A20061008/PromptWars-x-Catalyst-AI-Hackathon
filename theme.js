;(() => {
  const key = 'everwell-theme'
  const toggleLabel = theme => (theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
  let theme = 'light'
  try {
    const savedTheme = localStorage.getItem(key)
    if (savedTheme === 'dark' || savedTheme === 'light') theme = savedTheme
  } catch (error) {
    console.warn('Theme preference could not be read from this browser.', error)
  }

  const setTheme = nextTheme => {
    theme = nextTheme
    document.documentElement.dataset.theme = theme
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      button.textContent = theme === 'dark' ? '☀' : '☾'
      button.setAttribute('aria-label', toggleLabel(theme))
      button.title = toggleLabel(theme)
      button.setAttribute('aria-pressed', String(theme === 'dark'))
    })
    const themeColor = document.querySelector('meta[name="theme-color"]')
    if (themeColor) themeColor.content = theme === 'dark' ? '#101522' : '#f4f7fc'
  }

  const makeToggle = () => {
    const button = document.createElement('button')
    button.className = 'icon-btn theme-toggle'
    button.type = 'button'
    button.dataset.themeToggle = ''
    button.addEventListener('click', () => {
      const nextTheme = theme === 'dark' ? 'light' : 'dark'
      setTheme(nextTheme)
      try {
        localStorage.setItem(key, nextTheme)
      } catch (error) {
        console.warn('Theme preference could not be saved in this browser.', error)
      }
    })
    return button
  }

  const loginLanguage = document.getElementById('loginLanguage')
  if (loginLanguage && loginLanguage.parentElement) {
    loginLanguage.parentElement.insertBefore(makeToggle(), loginLanguage)
  }

  const dashboardLanguage = document.getElementById('language')
  if (dashboardLanguage && dashboardLanguage.parentElement) {
    dashboardLanguage.parentElement.insertBefore(makeToggle(), dashboardLanguage)
  }

  setTheme(theme)
})()
