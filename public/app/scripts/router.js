import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import Login from './containers/login';
import Register from './containers/Register';
import Setup from './containers/Setup';
import Profile from './containers/Profile';
import Matches from './containers/Matches';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThemeManager from 'material-ui/styles/getMuiTheme';

const Root = React.createClass({
	childContextTypes: {
		 muiTheme: React.PropTypes.object
 },

 getChildContext() {
		 return {
				 muiTheme: ThemeManager()
		 };
 },
	render() {
		return (
		  <Provider store={this.props.store}>
				<MuiThemeProvider>
			    <Router history={browserHistory}>
			      <Route path="/" component={Login} />
			      <Route path="/register" component={Register} />
			      <Route path="/setup" component={Setup} />
			      <Route path="/profile" component={Profile} />
			      <Route path="/matches" component={Matches} />
			    </Router>
				</MuiThemeProvider>
		  </Provider>
		)
	}
});

export default Root;
