export function createHeaderBlock (className, ariaText) {
  const header = document.createElement('header')
  header.className = className
  header.setAttribute('aria-label', ariaText)
  return header
}
