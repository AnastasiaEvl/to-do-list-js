function getFromLocalStorage () {
  try {
    return JSON.parse(localStorage.getItem('TASKS')) ?? []
  } catch (err) {
    return []
  }
}

function setToLocalStorage (data) {
  localStorage.setItem('TASKS', JSON.stringify(data))
}

export { getFromLocalStorage, setToLocalStorage }
