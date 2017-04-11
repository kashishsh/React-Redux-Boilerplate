import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserList extends Component {

	// This function will get updated every time the store changes.
	createListItems () {
		return this.props.users.map((user) => {
			return (
				<li key= {user.id}>{user.first} {user.last}</li>
			);
		});
	}

	render() {
		return (
			<ul>
				{ this.createListItems() }
			</ul>
		);
	};
};

// mapStateToProps function takes pieces of store and pass it as property to component.


function mapStateToProps(state) {
	return {
		users : state.users
	};
}

export default connect(mapStateToProps)(UserList);