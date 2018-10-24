// Get expenses total
export default (expenses) => {
  return expenses.reduce((acc, currentExpense) => {
    return acc + currentExpense.amount
  }, 0)
};
