import initialState from './initialState'

const userInfoReducer = (state = initialState.userInfo, action) => {
	switch (action.type) {
		case 'SET_USER_INFO':
			return (state = action.payload.currentUser)
		default:
			return state
	}
}

export default userInfoReducer
