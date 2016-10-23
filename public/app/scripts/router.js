import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import Login from './containers/login';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Root = ({ store }) => (
  <Provider store={store}>
		<MuiThemeProvider>
	    <Router history={browserHistory}>
	      <Route path="/" component={Login} />
	    </Router>
		</MuiThemeProvider>
  </Provider>
);

export default Root;
