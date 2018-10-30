import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
  const uid = 'test_uid';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: uid
  });
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
