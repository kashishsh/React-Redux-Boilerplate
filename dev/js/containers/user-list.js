import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserList extends Component {

	render() {
		return (
			<ul>
				<li>One</li>
				<li>Two</li>
				<li>Three</li>
				<li>Four</li>
			</ul>
		);
	};
};

// mapStateToProps function takes pieces of store and pass it as property to component.


function mapStateToProps() {
	return {
		users : state.users
	};
}

export default connect(mapStateToProps)(UserList);