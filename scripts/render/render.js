import { createHeader, createUnderHeader, toDoTask } from '../createBlocksMainPage/index.js'
import { root } from '../createElements/index.js'
import { SELECTORS } from '../constants/index.js'
import { errorEmptyMessage } from '../functions/index.js'

export function render (data) {
  const containerForFormAndUnderHead = root.querySelector(SELECTORS.statInfContainer)
  containerForFormAndUnderHead.innerHTML = ''
  containerForFormAndUnderHead.append(createUnderHeader(data))
  createHeader(data)
  const containerForForm = root.querySelector(SELECTORS.containerForForm)
  containerForForm.innerHTML = ''
  data.forEach((e) => containerForForm.append(toDoTask(e)))
  errorEmptyMessage(data)
}
