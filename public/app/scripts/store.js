import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import session from './reducers/session';
import feed from './reducers/feed';

let store = createStore(
	combineReducers({
		session,
		feed
	}),
  applyMiddleware(thunk));

export default store
