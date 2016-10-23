import React from 'react';
import CardPreview from './cardPreview';
// import CardDetail from './cardDetail';

export default React.createClass({
	componentDidMount() {
		this.props.fetchFeed(this.props.session.token, this.props.session.profileType);
	},
	render() {
		let matches = this.props.matches.map((user) => {
			return <CardPreview user={user} key={user._id}/>
		})
		return (
			<div>{matches}</div>
		)
	}
})
