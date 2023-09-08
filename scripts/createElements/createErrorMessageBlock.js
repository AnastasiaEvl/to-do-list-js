export function createErroMessageBlock (className) {
  const errorMessage = document.createElement('p')
  errorMessage.className = className
  return errorMessage
}
