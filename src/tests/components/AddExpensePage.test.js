import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addStartExpense, history, wrapper;

beforeEach(() => {
  addStartExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage addStartExpense={addStartExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addStartExpense).toHaveBeenLastCalledWith(expenses[1]);
});
