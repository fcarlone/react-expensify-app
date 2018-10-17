import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

// stateless functional component
const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    <p>{props.filters.text}</p>
    <p>{props.expenses.length}</p>
    <ExpenseListItem />
  </div>
);

// Higher Order Function
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

// const ConnectedExpenseList = connect((state) => {
//   return {
//     // name: 'Frank'
//     expenses: state.expenses
//   };
// })(ExpenseList);

export default connect(mapStateToProps)(ExpenseList);

// export default ExpenseList;
// export default ConnectedExpenseList;
