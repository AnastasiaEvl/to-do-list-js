export function createForm (className, id) {
  const form = document.createElement('form')
  form.className = className
  form.setAttribute('id', id)
  return form
}
