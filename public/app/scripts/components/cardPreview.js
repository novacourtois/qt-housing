import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

export default React.createClass({
	render() {
		return (
			<Card>
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
