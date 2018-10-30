import authReducer from '../../reducers/auth';;

test('should set user id for login', () => {
  const uid = 'test_uid';
  const action = {
    type: 'LOGIN',
    uid: uid
  }

  const state = authReducer({}, action);
  expect(state.uid).toEqual(action.uid);
});

test('should set user id for logout', () => {
  const uid = 'test_uid'
  const action = {
    type: 'LOGOUT',
  }

  const state = authReducer({ uid: uid }, action);
  expect(state).toEqual({});
});
