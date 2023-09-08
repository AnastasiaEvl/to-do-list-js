import { root } from '../createElements/index.js'
import { chosenElement, deleteTask, changeTextTask } from '../functions/index.js'

export function changeTaskBlock () {
  const containerForForm = root.querySelector('.content')
  containerForForm.addEventListener('click', function (e) {
    if (e.target.classList.contains('checked')) {
      const element = e.target.nextElementSibling.id
      chosenElement(element)
    } else if (e.target.classList.contains('close')) {
      const elem = e.target.parentElement.id
      deleteTask(elem)
    } else if (e.target.classList.contains('save')) {
      changeTextTask(e)
    }
  })
}
