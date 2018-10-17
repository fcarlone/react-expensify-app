import uuid from 'uuid';

// ADD_EXPENSE Action
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description: description,
      note: note,
      amount: amount,
      createdAt: createdAt
    }
  };
};

// REMOVE_EXPENSE Action
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id: id
});

// EDIT_EXPENSE Action
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
