import { getFromLocalStorage, setToLocalStorage } from '../utils/index.js'
import { render } from '../render/index.js'

export function deleteAllElements () {
  const toDoData = getFromLocalStorage()
  toDoData.length = 0
  setToLocalStorage(toDoData)
  render(toDoData)
}
