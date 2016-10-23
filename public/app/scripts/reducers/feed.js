const initialState = {
	matches: [],
	isFetching: false
}

function feed(state = initialState, action) {
	switch (action.type) {
    case 'REQUEST_FEED' :
      return Object.assign({}, state, {isFetching: true})
		case 'RECEIVE_FEED' :
		 	return Object.assign({}, {matches: action.matches, isFetching: false})
		case 'RECEIVE_FEED_ERROR' :
	 		return Object.assign({}, state, {
				isFetching: false,
				error: action.error
			})
    default :
      return state
  }
}

export default feed;
