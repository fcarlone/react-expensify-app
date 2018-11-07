import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header'
import { createUser, loginUser } from '../actions/auth';

export class EmailLoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: ''
    };
  };

  onEmailChange = (e) => {
    e.persist();
    this.setState(() => ({ email: e.target.value }))
  };

  onChangePassword = (e) => {
    e.persist();
    this.setState(() => ({ password: e.target.value }))

  };

  onSubmit = (e) => {
    e.preventDefault()

    if (!this.state.email || !this.state.password) {
      this.setState(() => ({
        error: 'Try logging in again.'
      }))
    };
    console.log(`e:{}`)
  };

  onLogin = () => {
    console.log(`onLogin ${this.state.email} ${this.state.password}`);
    this.props.loginUser(this.state.email, this.state.password);
  }

  onSignUp = () => {
    console.log(`onSignUp ${this.state.email}, ${this.state.password}`)
    this.props.createUser(this.state.email, this.state.password);
  };

  render() {
    return (
      <header className="header">
        <Header />
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Log in with your email account</h1>
            <div className="page-header__actions">
              <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">Error: {this.state.error}</p>}
                <input
                  type="text"
                  placeholder="email address"
                  className="text-input"
                  autoFocus
                  value={this.state.email}
                  onChange={this.onEmailChange}
                />
                <input
                  type="text"
                  placeholder="password"
                  className="text-input"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
                <div>
                  <button className="button-layout-login" onClick={this.onLogin}>Log In</button>
                  <button className="button-layout-signup" onClick={this.onSignUp}>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    )
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (email, password) => dispatch(createUser(email, password)),
    loginUser: (email, password) => dispatch(loginUser(email, password))
  };
};

export default connect(undefined, mapDispatchToProps)(EmailLoginPage);
