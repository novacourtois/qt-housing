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

function receiveFeed(matches) {
  return { type: 'RECEIVE_FEED', matches }
}

function receiveFeedError(error) {
	return { type: 'RECEIVE_FEED_ERROR', error }
}

function requestFeed() {
  return { type: 'REQUEST_FEED'}
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
