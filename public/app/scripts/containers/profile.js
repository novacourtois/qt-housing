import React from 'react';
import { connect } from 'react-redux';
import View from '../components/profileView';
import Edit from '../components/profileEdit';

const RegisterComponent = React.createClass({
	render() {
		return (
			<div> <View/> </div>
		)
	}
});

const mapStateToProps = (state) => {
  return {
    user: state.session
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
