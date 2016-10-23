import { requestLogin, requestSignup, receiveUser } from '../actions/session';

const initialState = {
	user: {
		username: 'nicerhugs',
		email: '',
		phone: '',
		isPhoneVerified: false,
		isEmailVerified: false,
		isAddressVerified: false,
		profileType: '',
		isFetching: false
	}
}

function session(state = initialState, action) {
	switch (action.type) {
    case 'REQUEST_LOGIN' :
      return Object.assign({}, state, {
        isFetching: true
      })
		case 'REQUEST_SIGNUP' :
    return Object.assign({}, state, {
        isFetching: true
      })
		case 'REQUEST_LOGOUT' :
    return Object.assign({}, state, {
        isFetching: true
      })
		case 'RECEIVE_USER' :
		 	return Object.assign({}, state, action.user, {
				isFetching: false
			})
    default:
      return state
  }
}

export default session;
