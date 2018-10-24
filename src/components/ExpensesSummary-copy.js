import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => {
  return (
    <div>
      <p>Expenses Summary</p>
      {
        props.expensesLength.length !== 0 ? (
          <p>Viewing {props.expensesLength.length} {expenseWord} totalling {numeral(props.expensesAmount / 100).format('$0,0.00')}</p>
        ) : (
            <p></p>
          )
      }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expensesLength: selectExpenses(state.expenses, state.filters),
    expensesAmount: selectExpensesTotal(state.expenses)
  };
}


export default connect(mapStateToProps)(ExpenseSummary);
