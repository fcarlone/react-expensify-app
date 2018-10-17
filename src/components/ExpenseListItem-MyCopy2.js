// Export a stateless functional component
// description, amount, createdAt

// import React
import React from 'react';

// Stateless Functional Component
// Destructure the props object
const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
  </div>
)

export default ExpenseListItem;

// // Higher Order Component
// const MapStateToProps = (state) => {
//   return {
//     expenses: state.expenses.map((expense) => {
//       return (
//         <li key={expense.id}>Description: {expense.description} Amount: {expense.amount} Created At: {expense.createdAt}</li>
//       )
//     })
//   }
// }

// export default connect(MapStateToProps)(ExpenseListItem);

// // Original Code

// // const ExpenseListItem = (props) => (
// //   <div>
// //     <h1>ExpenseListItem</h1>
// //     <p>{props.expenses}</p>
// //   </div>
// // )

// // const ConnectExpenseListItem = connect((state) => {
// //   return {
// //     expenses: state.expenses.map((expense) => {
// //       return (
// //         <li key={expense.id}>Description: {expense.description} Amount: {expense.amount} Created At: {expense.createdAt}</li>
// //       )
// //     })
// //   }
// // })(ExpenseListItem);

// // export default ConnectExpenseListItem;
