import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectUser } from '../actions/index';

class UserList extends Component {

	// This function will get updated every time the store changes.
	createListItems () {
		return this.props.users.map((user) => {
			return (
				<li 
				key= {user.id}
				onClick= {() => this.props.selectUser(user)}
				>
					{user.first} {user.last}
				</li>
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

// Map action creators to component

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		selectUser : selectUser	
	}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList);