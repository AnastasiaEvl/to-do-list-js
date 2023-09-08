import {
  createHeaderBlock,
  createForm,
  createInput,
  createBtn,
  createLabel,
  createErroMessageBlock
} from '../createElements'

export function createHeader () {
  const header = createHeaderBlock('header', 'Таблица список задач')
  const form = createForm('add-task-form', 'form')
  form.append(createInput('Enter todo...', 'Поле ввода новой задачи', '0',
    'input', '', '', '', ''),
  createBtn('add', 'Добавить новую задачу', 'b3', 'submit', '', ''),
  createLabel('label', 'input', ''))
  header.append(createBtn('delete all', 'Удалить все задачи', 'b1', '', '',
    ''),
  createBtn('delete last', 'Удалить последнюю задачy', 'b2', '', '', ''),
  form,
  createErroMessageBlock('error'))
  return header
}
