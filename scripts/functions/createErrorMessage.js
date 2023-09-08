import { SELECTORS } from '../constants/index.js'
import { root } from '../createElements/index.js'

export function createErrorMessage (text) {
  const errorMessage = document.querySelector(SELECTORS.error)
  errorMessage.textContent = text
  return errorMessage
}

export function errorEmptyMessage ({ length }) {
  if (length === 0) {
    const containerForForm = root.querySelector(SELECTORS.containerForForm)
    containerForForm.textContent = 'IT`S EMPTY'
    containerForForm.classList.add('empty')
  }
}
