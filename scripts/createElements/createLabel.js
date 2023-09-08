export function createLabel (className, valueOfAttrFor, id) {
  const label = document.createElement('label')
  label.className = className
  label.setAttribute('for', valueOfAttrFor)
  if (id !== '') {
    label.setAttribute('id', id)
  }
  return label
}
