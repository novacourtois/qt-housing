import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default React.createClass({
	viewMatch() {
		this.props.select(this.props.user);
	},
	render() {
		return (
			<Card onClick={this.viewMatch}>
		    <CardTitle title={this.props.user.username} subtitle={this.props.user.pronouns}/>
		    <CardText>
		      {this.props.user.headline}
		    </CardText>
		    <CardActions>
		    </CardActions>
		  </Card>
		)
	}
})
