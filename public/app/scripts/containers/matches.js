import React from 'react';
import { connect } from 'react-redux';
// import CardPreview from '../components/cardPreview';
// import CardDetail from '../components/cardDetail';

const RegisterComponent = React.createClass({
	render() {
		return (
			<div>cards go here</div>
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
