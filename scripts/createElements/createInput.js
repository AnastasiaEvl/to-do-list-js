export function createInput (placeholderText, ariaText, autofocus, id, modificator, type, className, name) {
  const createInp = document.createElement('input')
  createInp.setAttribute('placeholder', placeholderText)
  createInp.setAttribute('arial-label', ariaText)
  createInp.setAttribute('autofocus', autofocus)
  if (name !== '') {
    createInp.setAttribute('name', name)
  }
  if (id !== '') {
    createInp.setAttribute('id', id)
  }
  if (modificator !== '') {
    createInp.classList.add(modificator)
  }
  if (type !== '') {
    createInp.type = 'checkbox'
  }
  if (className !== '') {
    createInp.className = className
    createInp.classList.add(modificator)
  } else {
    createInp.className = 'input'
  }
  return createInp
}
