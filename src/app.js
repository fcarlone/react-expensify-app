import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import { firebase } from './firebase/firebase';
import LoginPage from '../src/components/LoginPage';
// import './playground/promises';

const store = configureStore();

// add expenses
// store.dispatch(addExpense({
//   description: 'Water bill',
//   amount: 1200,
//   createdAt: 200
// }));

// store.dispatch(addExpense({
//   description: 'Gas bill',
//   amount: 12500,
//   createdAt: 300
// }));

// store.dispatch(addExpense({
//   description: 'Rent bill',
//   amount: 250000,
//   createdAt: 100
// }));

// console.log(store.getState());

// filter expenses
// store.dispatch(setTextFilter(''));

// setTimeout(() => {
//   store.dispatch(setTextFilter('water'));
// }, 4000)

// console.log(store.getState());

// get visible expenses
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />

  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// store.dispatch(startSetExpenses()).then(() => {
//   ReactDOM.render(jsx, document.getElementById('app'));
// });

// ReactDOM.render(jsx, document.getElementById('app'));

// Check if Firebase Authenticaton is working
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    console.log('log in - user id:', user.uid);
    store.dispatch(startSetExpenses()).then(() => {
      // ReactDOM.render(jsx, document.getElementById('app'));
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      };
    });
  } else {
    store.dispatch(logout());
    console.log('log out')
    // ReactDOM.render(jsx, document.getElementById('app'));
    renderApp();
    history.push('/');
  }
});
