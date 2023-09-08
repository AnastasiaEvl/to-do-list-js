import { getFromLocalStorage } from '../utils/index.js'
import { render } from '../render/index.js'

export function find (e) {
  const value = e.target.value
  const filteredTasks = getFromLocalStorage().filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
  render(filteredTasks)
}
