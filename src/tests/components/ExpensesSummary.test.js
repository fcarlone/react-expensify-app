import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpensesSummary';


test('should correctly render 2 expenses totalling $50.00', () => {
  const wrapper = shallow(<ExpenseSummary expensesLength={2} expensesAmount={5000} />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render 1 expense totalling $20.00', () => {
  const wrapper = shallow(<ExpenseSummary expensesLength={1} expensesAmount={2000} />);
  expect(wrapper).toMatchSnapshot();
})

