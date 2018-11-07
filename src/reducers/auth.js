// handle login and logout
export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    case 'CREATEUSER':
      return {
        email: action.email
      }
    default:
      return state;
  }
};

