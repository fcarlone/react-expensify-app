// Higher Order Component (HOC) - A component that renders another component
// The goal of a Higher Component Component is to:
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// create a regular function (not a React component)
const withAdminWarning = (WrappedComponent) => {
  // return a new component.  the component created is the HOC
  return (props) => (
    // have a few goals within the div - 1) add the adminWarining 2) make sure the WrappedComponent is rendered
    <div>
      {props.isAdmin && <p>This is private info. Please don't share.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};
// function will be called with the component "another component" we want to wrap
// will return a alternative version of the Info component
const AdminInfo = withAdminWarning(Info);

// regular function that returns a high order component
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuth ? (
        <WrappedComponent {...props} />
      )
        : (<p>Please login for authentication</p>)}
    </div>
  )
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the data" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info="You are autherized.  Please continue" />, document.getElementById('app'));
