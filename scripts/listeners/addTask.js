import { root } from '../createElements/index.js'
import { addTask, deleteAllElements, deleteLastElement } from '../functions/index.js'
import { SELECTORS } from '../constants/index.js'

export function listenerAddTask () {
  const form = root.querySelector(SELECTORS.form)
  form.addEventListener('submit', addTask)
  const head = root.querySelector(SELECTORS.header)
  head.querySelector(SELECTORS.deleteAllBtn).addEventListener('click', deleteAllElements)
  head.querySelector(SELECTORS.deleteLastBtn).addEventListener('click', deleteLastElement)
}
