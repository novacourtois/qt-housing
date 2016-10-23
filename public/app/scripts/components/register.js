import React from 'react';
import TextField from 'material-ui/TextField';


export default React.createClass({
	render() {
		return (
			<div>
				<TextField
      		hintText="The hint text can be as long as you want, it will wrap."
    		/>
			</div>
		)
	}
});
