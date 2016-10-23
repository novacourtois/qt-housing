import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import Login from './containers/login';
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
			    </Router>
				</MuiThemeProvider>
		  </Provider>
		)
	}
});

export default Root;
