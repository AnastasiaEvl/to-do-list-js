import { createDivBlock, createInput, createLabel, createBtn } from '../createElements'

export function toDoTask ({
  id,
  isDone,
  date,
  name
}) {
  const container = createDivBlock('div', '', '', '', '', '')
  const blockToDoTask = createDivBlock('task-block', '', `${id}`, '', '', '')
  const approvedBtn = createInput('', 'Статус выполнения задачи',
    '', `${id}`, 'checkbox', 'checkbox', 'checked', `${id}`)
  const textContentToDd = createDivBlock('task-inf', `${name}`, 'content',
    '', `Задача: ${name}`, '0')
  textContentToDd.setAttribute('contenteditable', 'true')
  if (isDone) {
    approvedBtn.setAttribute('checked', 'true')
    blockToDoTask.classList.add('task-active')
    textContentToDd.classList.add('done')
  }
  blockToDoTask.append(approvedBtn, createLabel('label', `${id}`, `${id}`),
    textContentToDd, createBtn('Save Changes', 'Сохранить изменения', '',
      '', 'save', ''),
    createDivBlock('task-inf', `${date}`, '', 'date',
      `Дата задачи:${date}`, '0'),
    createBtn('', 'Удалить задачу', '', '', 'close', ''))
  container.append(blockToDoTask)
  return container
}
