import 'whatwg-fetch';
import store from '../store';
const dispatch = store.dispatch;

function getFeed(token, profileType) {
	return new Promise((resolve, reject) => {
		fetch(`/api/users/feed?access_token=${token}&profileType=${profileType}`)
		.then(response => {
    	return response.json()
  	})
		.then(resolve)
		.catch(reject);
	})
}

function putWave(token, me, you) {
	return new Promise((resolve, reject) => {
		fetch(`/api/users/wave?access_token=${token}`, {
			method: 'put',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				userId: me, theirId: you
			})
		})
		.then(response => {
    	return response.json()
  	})
		.then(resolve)
		.catch(reject);
	})
}

function receiveFeed(matches) {
  return { type: 'RECEIVE_FEED', matches }
}

function receiveFeedError(error) {
	return { type: 'RECEIVE_FEED_ERROR', error }
}

function requestFeed() {
  return { type: 'REQUEST_FEED'}
}

function receiveWave(me) {
  return { type: 'RECEIVE_WAVE', me }
}

function receiveWaveError(error) {
	return { type: 'RECEIVE_WAVE_ERROR', error }
}

function requestWave() {
  return { type: 'REQUEST_WAVE'}
}

export function fetchFeed(token, profileType) {
	dispatch(requestFeed());
  return function (dispatch) {
    return getFeed(token, profileType).then(
      matches => dispatch(receiveFeed(matches)),
      error => dispatch(receiveFeedError(error))
    );
  };
}

export function makeWave(token, me, you) {
	dispatch(requestWave());
  return function (dispatch) {
    return putWave(token, me, you).then(
      wave => dispatch(receiveWave(user)),
      error => dispatch(receiveWaveError(error))
    );
  };
}
