// Export a stateless functional component
// description, amount, createdAt

// import React and Connect
import React from 'react';
import { connect } from 'react-redux';

// Refactor Code 

// Stateless Functional Component
const ExpenseListItem = (props) => (
  <div>
    <h1>ExpenseListItem</h1>
    <p>{props.expenses}</p>
  </div>
)

// Higher Order Component
const MapStateToProps = (state) => {
  return {
    expenses: state.expenses.map((expense) => {
      return (
        <li key={expense.id}>Description: {expense.description} Amount: {expense.amount} Created At: {expense.createdAt}</li>
      )
    })
  }
}

export default connect(MapStateToProps)(ExpenseListItem);

// Original Code

// const ExpenseListItem = (props) => (
//   <div>
//     <h1>ExpenseListItem</h1>
//     <p>{props.expenses}</p>
//   </div>
// )

// const ConnectExpenseListItem = connect((state) => {
//   return {
//     expenses: state.expenses.map((expense) => {
//       return (
//         <li key={expense.id}>Description: {expense.description} Amount: {expense.amount} Created At: {expense.createdAt}</li>
//       )
//     })
//   }
// })(ExpenseListItem);

// export default ConnectExpenseListItem;
