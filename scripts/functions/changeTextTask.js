import { getFromLocalStorage, setToLocalStorage } from '../utils/index.js'

export function changeTextTask (e) {
  const newGet = getFromLocalStorage().reduce((acc, task) => {
    if (task.id === e.target.parentElement.id) {
      task.name = e.target.previousElementSibling.textContent
      return [...acc, { ...task }]
    }
    return [...acc, task]
  }, [])
  setToLocalStorage(newGet)
}
