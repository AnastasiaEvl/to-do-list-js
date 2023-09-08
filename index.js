import { getFromLocalStorage } from './scripts/utils/index.js'
import { createDivBlock, root, themeButton } from './scripts/createElements/index.js'
import { createHeader } from './scripts/createBlocksMainPage/index.js'
import { listenerAddTask, findTask, listenerTheme } from './scripts/listeners/index.js'
import { changeTaskBlock } from './scripts/changeOneTaskBlock/index.js'
import { render } from './scripts/render/index.js'

export function initApp () {
  root.prepend(themeButton, createHeader(), createDivBlock('circle', '', '', '', '', ''),
    createDivBlock('circle', '', 'circleTwo', 'left', '', ''),
    createDivBlock('container', '', 'stat', '', '', ''),
    createDivBlock('content', '', '', 'container-form', '', ''))
  listenerAddTask()
  changeTaskBlock()
  findTask()
  listenerTheme()
  render(getFromLocalStorage())
}

document.addEventListener('DOMContentLoaded', initApp)
