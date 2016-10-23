const initialState = {
	username: 'nicerhugs',
	email: '',
	phone: '',
	isPhoneVerified: false,
	isEmailVerified: false,
	isAddressVerified: false,
	profileType: '',
	isFetching: false
}

function session(state = initialState, action) {
	switch (action.type) {
    case 'REQUEST_SESSION' :
      return Object.assign({}, state, {isFetching: true})
		case 'REQUEST_LOGOUT' :
    	return Object.assign({}, state, {isFetching: true})
		case 'RECEIVE_SESSION' :
		 	return Object.assign({}, state, action.user, {isFetching: false})
		case 'RECEIVE_SESSION_ERROR' :
	 		return Object.assign({}, state, {
				isFetching: false,
				error: action.error
			})
		case 'RECEIVE_LOGOUT' :
			return Object.assign({}, initialState)
    default :
      return state
  }
}

export default session;
