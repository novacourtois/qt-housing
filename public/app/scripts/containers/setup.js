import React from 'react';
import { connect } from 'react-redux';

const RegisterComponent = React.createClass({
	render() {
		return (
			<div>user setup form goes here</div>
		)
	}
});

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent);

export default Register
