export function createDivBlock (className, text, id, modificator, ariaText, tabindex) {
  const createdDiv = document.createElement('div')
  createdDiv.className = className
  if (text !== '') {
    createdDiv.textContent = `${text}`
  }
  if (id !== '') {
    createdDiv.setAttribute('id', id)
  }
  if (modificator !== '') {
    createdDiv.classList.add(modificator)
  }
  if (ariaText !== '') {
    createdDiv.setAttribute('aria-label', ariaText)
  }
  if (tabindex !== '') {
    createdDiv.setAttribute('tabindex', tabindex)
  }
  return createdDiv
}
