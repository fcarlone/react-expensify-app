import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

// Firebase email createUser method
export const createUser = (email, password) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        let errorMessage = error.message;
        alert(`Error Message: ${errorMessage}`);
      });
  }
};

// Firebase email signIn method
export const loginUser = (email, password) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        let errorMessage = error.message;
        alert(`Error Message: ${errorMessage}`);
      });
  }
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
