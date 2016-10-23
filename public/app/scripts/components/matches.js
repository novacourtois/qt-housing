import React from 'react';
import CardPreview from './cardPreview';
// import CardDetail from './cardDetail';
import { browserHistory } from 'react-router';

export default React.createClass({
  componentWillMount() {
    if (!this.props.session.token) {
      browserHistory.push('/')
    }
  },
	componentDidMount() {
		this.props.fetchFeed(this.props.session.token, this.props.session.profileType);
	},
	getInitialState() {
		return {
			
		}
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
