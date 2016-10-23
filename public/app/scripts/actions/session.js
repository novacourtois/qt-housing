export function requestLogin(username, password) {
  return { type: 'REQUEST_LOGIN', username, password }
}

export function requestSignup(username, password) {
  return { type: 'REQUEST_SIGNUP', username, password }
}

export function requestLogout() {
	return { type: 'REQUEST_LOGOUT' }
}

export function receiveUser(user) {
  return { type: 'RECEIVE_LOGIN', user }
}
