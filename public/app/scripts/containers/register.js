import React from 'react';
import { connect } from 'react-redux';
import RegisterComponent from '../components/register';
import { requestLogin } from '../actions/session';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
		handleRegister: (username, password) => {
			dispatch(requestRegister(username, password))
		}
	}
};

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent);

export default Register
