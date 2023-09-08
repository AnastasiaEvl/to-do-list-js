import { createDivBlock, createBtn, createLabel, createInput } from '../createElements/index.js'
import { counter } from '../functions/index.js'

export const createUnderHeader = elements => {
  const underHeader = createDivBlock('header', '', 'und', '', '', '')
  underHeader.append(createDivBlock('statistic-inf', `all: ${elements.length}`,
    '', '', `Количество задач : ${elements.length}`, '0'),
  createDivBlock('statistic-inf', `completed: ${counter(elements)}`, '', '',
      `Количество выполненных задач:  ${counter(elements)}`, '0'),
  createBtn('show all', 'Показать все задачи', 'b4', '', '', ''),
  createBtn('show completed', 'Показать выполненные задачи', 'b5', '', '', ''),
  createLabel('label', 'searchInp', ''),
  createInput('Search...', 'searchInputTask', 'Поле ввода для поиска задачи',
    'searchInp', 'search', '', '', ''))
  return underHeader
}
