import React from 'react';
import CardPreview from './cardPreview';
import CardDetail from './cardDetail';
import { browserHistory } from 'react-router';

export default React.createClass({
	getInitialState() {
		return { detailId: null }
	},
  componentWillMount() {
    if (!this.props.session.token) {
      browserHistory.push('/')
    }
  },
	componentDidMount() {
		this.props.fetchFeed(this.props.session.token, this.props.session.profileType);
	},
	viewMatch(match) {
		this.setState({detailId: match._id})
	},
	resetMatches() {
		this.setState({detailId: null})
	},
	render() {
		let matches;
		if (this.state.detailId) {
			const match = this.props.matches.filter(match => match._id === this.state.detailId)[0];
			matches = <CardDetail user={match} token={this.props.session.token} me={this.props.session._id} resetMatches={this.resetMatches} wave={this.props.wave}/>
		} else {
			matches = this.props.matches.map((user) => {
				return <CardPreview user={user} key={user._id} select={this.viewMatch}/>
			})
		}
		return (
			<div>{matches}</div>
		)
	}
})
