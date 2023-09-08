import { getFromLocalStorage } from '../utils/index.js'
import { render } from '../render/index.js'

export function showCompletedTasks () {
  const newMadeTasks = getFromLocalStorage().filter((e) => e.isDone === true)
  render(newMadeTasks)
}
