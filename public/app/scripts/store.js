import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import session from './reducers/session';

let store = createStore(
	session,
  applyMiddleware(thunk));

export default store
