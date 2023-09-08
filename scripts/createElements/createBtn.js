export function createBtn (text, attrValue, id, type, modificator, className) {
  const createdBtn = document.createElement('button')
  createdBtn.textContent = text
  createdBtn.setAttribute('aria-label', attrValue)
  if (id !== '') {
    createdBtn.setAttribute('id', id)
  }
  if (className !== '') {
    createdBtn.className = className
  } else {
    createdBtn.className = 'btn'
  }
  if (type !== '') {
    createdBtn.setAttribute('type', type)
  }
  if (modificator !== '') {
    createdBtn.classList.add(modificator)
  }
  return createdBtn
}

export const themeButton = createBtn('Theme')
