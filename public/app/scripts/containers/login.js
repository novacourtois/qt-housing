import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../components/register';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default Login
