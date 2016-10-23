import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../components/login';
import { login } from '../actions/session';

const mapStateToProps = (state) => {
  return state.session
};

const mapDispatchToProps = (dispatch) => {
  return {
		handleLogin: (username, password) => {
      dispatch(login(username, password))
    }
  }
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default Login
