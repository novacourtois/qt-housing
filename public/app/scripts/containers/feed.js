import React from 'react';
import { connect } from 'react-redux';
import Feed from '../components/matches';
import { fetchFeed, makeWave } from '../actions/feed';

const mapStateToProps = (state) => {
  return {
    session: state.session,
		matches: state.feed.matches
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
		fetchFeed: (token, profileType) => {
			dispatch(fetchFeed(token, profileType))
		},
		wave: (token, me, you) => {
			dispatch(makeWave(token, me, you))
		}
  }
};

const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);

export default Register
