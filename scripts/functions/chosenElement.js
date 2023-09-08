import { getFromLocalStorage, setToLocalStorage } from '../utils/index.js'
import { render } from '../render/index.js'

export function chosenElement (element) {
  const newGetCheck = getFromLocalStorage().reduce((acc, elem) => {
    if (elem.id === element) {
      elem.isDone = !elem.isDone
      return [...acc, { ...elem }]
    }
    return [...acc, elem]
  }, [])
  setToLocalStorage(newGetCheck)
  render(newGetCheck)
}
