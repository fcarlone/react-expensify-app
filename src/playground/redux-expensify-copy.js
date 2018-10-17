import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE Action
const addExpense = (
  { description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt
    }
  }
};

// REMOVE_EXPENSE Action
const removeExpense = (
  { id } = {}
) => {
  // console.log(`id: ${id}`);
  return {
    type: 'REMOVE_EXPENSE',
    // to place into the action object - to use it in the reducer
    id: id
  }
};

// EDIT_EXPENSE Action
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER Action
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_AMOUNT Action
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SORT_BY_DATE Action
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

// SET_START_DATE Action
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE Action
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => {
        // action.id to get the id from removeExpense function
        return id !== action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Filters Reducer
const fitlersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = fitlersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
};

// Get visible expenses 
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  // console.log(store.getState());
});

// get State of the store
// console.log(store.getState());

const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 1100,
  createdAt: 1000
}));

const expenseTwo = store.dispatch(addExpense({
  description: 'Coffee',
  amount: 300,
  createdAt: 11000
}));

// // console.log(expenseOne);
// // console.log(expenseTwo);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// // console.log(`removeExpenseOne: ${removeExpenseOne}`);
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount()); // sortBy = 'amount'
// store.dispatch(sortByDate());   // sortBy = 'date'

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());


const demoState = {
  expenses: [{
    id: 'random_string',
    description: 'January Rent',
    note: 'Last rent payment for this address',
    amount: 54500,
    createdAt: 0
  }],
  fitlers: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
