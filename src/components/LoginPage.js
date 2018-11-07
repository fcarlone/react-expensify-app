import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">React Expense Ledger</h1>
      <p>It's time to get your expenses under control</p>
      <button className="button-layout" onClick={startLogin}>Login with Google</button>
      <Link className="button-layout-2" to="/login">Login with Email Address</Link>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
