import React from 'react';
import TextField from 'material-ui/TextField';


export default React.createClass({
	componentWillMount() {
		this.props.handleLogin('nicerhugs', 'password')
	},
	render() {
		console.log(this.props.isFetching);
		return (
			<div>
				<TextField
      		hintText="The hint text can be as long as you want, it will wrap."
    		/>
			</div>
		)
	}
});
