import selectExpensesTotal from '../../selectors/expenses-total.js';;
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const expense = [];
  const result = selectExpensesTotal(expense);
  expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
  const expense = [expenses[1]];
  const result = selectExpensesTotal(expense);
  expect(result).toEqual(3000);
});

test('should correctly add up multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(9000);
});
