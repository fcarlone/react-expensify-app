import { createStore, bindActionCreators } from 'redux';

// Action generators - functions that return action objects

// pass-in destructure arguments
const addOne = (data) => {
  return data.a + data.b;
};

const addTwo = ({ a, b }, c) => {
  return a + b + c;
};

console.log(addOne({ a: 1, b: 10 }));
console.log(addTwo({ a: 10, b: 15 }, 100));


// const incrementCount = (payload = {}) => {
//   return {
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//   };
// };

// destructure arguments
const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy: incrementBy
  };
};

// action generator for DECREMENT
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions

// increment count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// unsubscribe();

// store.dispatch({
//   type: 'INCREMENT'
// });

store.dispatch(incrementCount());

// reset count 
// store.dispatch({
//   type: 'RESET'
// });
// reset count 
store.dispatch(resetCount());

// decrement count
// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });

// decrement count
store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

// store.dispatch({
//   type: 'SET',
//   count: 101
// });
store.dispatch(setCount({ count: 101 }));


