import React from 'react';
import { connect } from 'react-redux';
import RegisterComponent from '../components/register';
import { register } from '../actions/session';

const mapStateToProps = (state) => {
  return state
};

const mapDispatchToProps = (dispatch) => {
  return {
		handleRegister: (username, password) => {
			dispatch(register(username, password))
		}
	}
};

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent);

export default Register
