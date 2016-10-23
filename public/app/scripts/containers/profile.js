import React from 'react';
import { connect } from 'react-redux';
import View from '../components/profileView';
import Edit from '../components/profileEdit';

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
)(View);

export default Register
