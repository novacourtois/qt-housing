import { createStore } from 'redux';
import session from './reducers/session';

let store = createStore(session);

export default store
