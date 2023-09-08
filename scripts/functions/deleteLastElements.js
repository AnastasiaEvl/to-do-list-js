import { getFromLocalStorage, setToLocalStorage } from '../utils/index.js'
import { render } from '../render/index.js'

export function deleteLastElement () {
  const toDoData = getFromLocalStorage()
  toDoData.pop()
  setToLocalStorage(toDoData)
  render(toDoData)
}
