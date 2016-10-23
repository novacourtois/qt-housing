import 'whatwg-fetch';
import store from '../store';
const dispatch = store.dispatch;

function postSession(type, username, password) {
	return new Promise((resolve, reject) => {
		fetch(`/api/${type}`, {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
		    username, password
		  })
		}
	)
		.then(response => {
    	return response.json()
  	})
		.then(resolve)
		.catch(reject);
	})
}

function postLogout() {
	return new Promise((resolve, reject) => {
		fetch('/api/logout', {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
		    username, password
		  })
		}
	)
		.then(response => {
    	return response.json()
  	})
		.then(resolve)
		.catch(reject);
	})
}

function receiveSession(user) {
  return { type: 'RECEIVE_SESSION', user }
}

function receiveSessionError(error) {
	return { type: 'RECEIVE_SESSION_ERROR', error }
}

function requestSession() {
  return { type: 'REQUEST_SESSION' }
}

function requestLogout() {
	return { type: 'REQUEST_LOGOUT' }
}

function receiveLogout() {
	return { type: 'RECEIVE_LOGOUT' }
}

export function login(username, password) {
	dispatch(requestSession());
  return function (dispatch) {
    return postSession('login', username, password).then(
      user => dispatch(receiveSession(user)),
      error => dispatch(receiveSessionError(error))
    );
  };
}

export function register(username, password) {
	dispatch(requestSession());
  return function (dispatch) {
    return postSession('register', username, password).then(
      user => dispatch(receiveSession(user)),
      error => dispatch(receiveSessionError(error))
    );
  };
}

export function logout() {
	dispatch(requestLogout())
	return function (dispatch) {
    return postLogout().then(
      () => dispatch(receiveLogout()),
      error => dispatch(receiveSessionError(error))
    );
  };
}
