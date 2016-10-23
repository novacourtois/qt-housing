import React from 'react';
import { connect } from 'react-redux';
// import View from '../components/profileView';
// import Edit from '../components/profileEdit';

const RegisterComponent = React.createClass({
	render() {
		return (
			<div>profile goes here</div>
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
