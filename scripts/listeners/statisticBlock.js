import { root } from '../createElements/index.js'
import { SELECTORS } from '../constants/index.js'
import { find, showCompletedTasks, showAllTasks } from '../functions/index.js'

export function findTask () {
  const containerForFormAndUnderHead = root.querySelector(SELECTORS.statInfContainer)
  containerForFormAndUnderHead.addEventListener('change', find)
  containerForFormAndUnderHead.addEventListener('click', function (event) {
    if (event.target.id === 'b4') {
      showAllTasks()
    } else if (event.target.id === 'b5') {
      showCompletedTasks()
    }
  })
}
