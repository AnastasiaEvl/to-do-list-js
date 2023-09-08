import { getFromLocalStorage, setToLocalStorage } from '../utils/index.js'
import { render } from '../render/index.js'

export function deleteTask (event) {
  const parse = getFromLocalStorage()
  const index = parse.findIndex(n => n.id === event)
  parse.splice(index, 1)
  setToLocalStorage(parse)
  render(parse)
}
