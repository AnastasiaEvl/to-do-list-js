import { SELECTORS } from '../constants/index.js'
import { getFromLocalStorage, setToLocalStorage } from '../utils/index.js'
import { createErrorMessage } from './createErrorMessage.js'
import { root } from '../createElements/index.js'
import { render } from '../render/index.js'

export function addTask (event) {
  event.preventDefault()
  const toDoData = getFromLocalStorage()
  const valueInp = root.querySelector(SELECTORS.inputAddTask).value
  root.querySelector(SELECTORS.inputAddTask).value = ''
  const filteredTasks = toDoData.filter(item =>
    item.name.replaceAll(' ', '').toLowerCase() === (valueInp.replaceAll(' ', '').toLowerCase()))
  if (valueInp === '') {
    createErrorMessage('EMPTY')
  } else if (filteredTasks.length > 0) {
    createErrorMessage('ALREADY EXIST')
  } else {
    const newVal = {}
    newVal.id = self.crypto.randomUUID()
    newVal.name = valueInp
    newVal.isDone = false
    newVal.date = new Date().toLocaleDateString()
    toDoData.push(newVal)
    setToLocalStorage(toDoData)
    const containerForForm = root.querySelector(SELECTORS.containerForForm)
    containerForForm.innerHTML = ''
    render(toDoData)
    const taskContainer = document.querySelectorAll(SELECTORS.taskBlock)
    taskContainer[toDoData.length - 1].scrollIntoView({ behavior: 'smooth' })
  }
}
