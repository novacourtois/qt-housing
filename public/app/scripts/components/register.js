import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

export default React.createClass({
	getInitialState() {
		return {
			username: '',
			password: ''
		}
	},
	updateUsername(username) {
		this.setState({username: username.target.value})
	},
	updatePassword(password) {
		this.setState({password: password.target.value})
	},
	handleRegister() {
		this.props.handleRegister(this.state.username, this.state.password);
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
					ref="password"
					hintText="Password"
					floatingLabelText="password"
					type="password" />

				<RaisedButton label="Register" fullWidth={true}
					onClick={this.handleRegister}/>

			</div>
		)
	}
});
