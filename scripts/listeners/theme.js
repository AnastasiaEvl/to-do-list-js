import { themeButton } from '../createElements/index.js'

export function listenerTheme () {
  const currentTheme = localStorage.getItem('THEME')
  if (currentTheme === 'blue') {
    document.body.classList.add('dark-theme')
  }
  themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme')
    let theme = 'light'
    if (document.body.classList.contains('dark-theme')) {
      theme = 'blue'
    }
    localStorage.setItem('THEME', theme)
  })
}
