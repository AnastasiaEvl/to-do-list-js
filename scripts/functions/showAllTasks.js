import { render } from '../render/index.js'
import { getFromLocalStorage } from '../utils/index.js'

export function showAllTasks () {
  render(getFromLocalStorage())
}
