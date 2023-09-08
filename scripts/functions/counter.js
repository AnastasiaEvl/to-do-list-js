export function counter (element) {
  return element.reduce((total, amount) => {
    if (amount.isDone === true) {
      total += 1
    }
    return total
  }, 0)
}
