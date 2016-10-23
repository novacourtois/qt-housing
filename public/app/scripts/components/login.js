import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory, Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';

export default React.createClass({
	getInitialState() {
		return {
			email: '',
			password: ''
		}
	},
	updateUsername(email) {
		this.setState({email: email.target.value})
	},
	updatePassword(password) {
		this.setState({password: password.target.value})
	},
	handleLogin() {
		this.props.handleLogin(this.state.email, this.state.password);
	},
	componentWillReceiveProps(nextProps) {
		if (nextProps.token) {
			browserHistory.push('/matches')
		}
	},
	render() {
		return (
			<div>

				<h1>QT Housing</h1>
				<TextField
					onChange={this.updateUsername}
					hintText="username"
					floatingLabelText="Username"
					floatingLabelFixed={true} />
				<TextField
					onChange={this.updatePassword}
					hintText="password"
					floatingLabelText="Password"
					type="password" />

			<RaisedButton label="Login" fullWidth={true}
					onClick={this.handleLogin}/>

			<div>
			<Link to="/register"> Register </Link>
			</div>
			</div>
		)
	}
});
