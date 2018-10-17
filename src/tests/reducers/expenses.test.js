import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'noID'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Test Expense Reducer',
    amount: 4000,
    note: 'test note data 4',
    createdAt: 500
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense by id', () => {
  const expense = expenses[0];
  const note = 'test edit expensesReducer!!';

  const action = {
    type: 'EDIT_EXPENSE',
    id: expense.id,
    updates: { note }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe(note);
});

test('should not edit an expense if id not found', () => {
  const expense = expenses[0];
  const note = 'test edit expensesReducer!!';

  const action = {
    type: 'EDIT_EXPENSE',
    id: 'wrongID',
    updates: { note }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
