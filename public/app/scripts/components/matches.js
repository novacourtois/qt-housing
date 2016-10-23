import React from 'react';
// import CardPreview from '../components/cardPreview';
// import CardDetail from '../components/cardDetail';

export default React.createClass({
	componentDidMount() {
		console.log(this.props.session);
		this.props.fetchFeed(this.props.session.token, this.props.session.profileType);
	},
	render() {
		return (
			<div>hi</div>
		)
	}
})
