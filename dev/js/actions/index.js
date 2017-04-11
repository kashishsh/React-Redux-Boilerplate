// Action is actually the part that get returned.
// Actual function is the Action creator.
// Action itself is made up of two parts : 
// 1. Type : String that explains that exactly what happened, like- NEW_MOVIE_BUTTON_CLICKED.
// 2. Payload : Extra information you need to give to your app. like- User object.

// This is an action creator
export const selectUser = (user) => {
	console.log('You clicked on ', user.first);
	/* Return an action */
	return {
		type: 'USER_CLICKED',
		payload: user
	};
}