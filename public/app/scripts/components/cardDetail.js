import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default React.createClass({
	wave() {
		this.props.wave(this.props.token, this.props.me, this.props.user._id);
	},
	goBack() {
		this.props.resetMatches();
	},
	render() {
		return (
			<Card>
				<a href="#" onClick={this.goBack}>Back</a>
		    <CardTitle title={this.props.user.username} subtitle={this.props.user.pronouns}/>
		    <CardText>
		      {this.props.user.headline}
		    </CardText>
		    <CardActions>
					<button onClick={this.wave}>wave</button>
		    </CardActions>
		  </Card>
		)
	}
})
