import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default React.createClass({
	getInitialState() {
		return {
			email: '',
			password: ''
		}
	},
	updateUsername(email) {
		console.log(email.target.value);
		this.setState({email: email.target.value})
	},
	updatePassword(password) {
		this.setState({password: password.target.value})
	},
	handleLogin() {
		this.props.handleLogin(this.state.email, this.state.password);
	},
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if (nextProps.username !== '') {
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
					hintText="Password"
					floatingLabelText="password"
					type="password" />

			<RaisedButton label="Login" fullWidth={true}
					onClick={this.handleLogin}/>

			</div>
		)
	}
});
