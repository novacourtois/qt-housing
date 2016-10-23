import 'whatwg-fetch';
import store from '../store';
const dispatch = store.dispatch;

function postSession(url, email, password) {
	return new Promise((resolve, reject) => {
		fetch(url, {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
		    email, password
		  })
		}
	)
		.then(response => {
    	return response.json()
  	})
		.then(response => {
			fetch(`/api/users/me?access_token=${response.token}`)
			.then(user => {
				return user.json()
			})
			.then(user => {resolve.call(null, {token: response.token, user: user})})
			.catch(reject);
		})
	});
}

function postLogout() {
	return new Promise((resolve, reject) => {
		fetch('/api/logout', {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'
		  }
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

function requestSession(email) {
  return { type: 'REQUEST_SESSION', email}
}

function requestLogout() {
	return { type: 'REQUEST_LOGOUT' }
}

function receiveLogout() {
	return { type: 'RECEIVE_LOGOUT' }
}

export function login(email, password) {
	dispatch(requestSession(email));
  return function (dispatch) {
    return postSession('/auth/local', email, password).then(
      user => dispatch(receiveSession(user)),
      error => dispatch(receiveSessionError(error))
    );
  };
}

export function register(email, password) {
	dispatch(requestSession(email));
  return function (dispatch) {
    return postSession('/api/users', email, password).then(
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
