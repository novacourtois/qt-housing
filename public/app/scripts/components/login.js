import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
	handleLogin() {
		this.props.handleLogin(this.state.username, this.state.password);
	},
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if (nextProps.username !== '') {
			browserHistory.push('/matches')
		}
	},
	render() {
		console.log(this.props);

		return (
			<div>

				<h1>QT Housing</h1>
				<TextField
				hintText="username"
				floatingLabelText="Username"
				floatingLabelFixed={true} />
				<TextField
				hintText="Password"
				floatingLabelText="password"
				type="password" />

			<RaisedButton label="Login" fullWidth={true}
					onClick={this.handleLogin}/>

			</div>
		)
	}
});
