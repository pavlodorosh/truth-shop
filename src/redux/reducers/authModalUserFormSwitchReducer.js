import initialState from './initialState'

const authModalUserFormSwitchReducer = (state = initialState.authModal.isUser, action) => {
	switch (action.type) {
		case 'CHANGE_AUTH_FORM':
			return !state
		default:
			return state
	}
}

export default authModalUserFormSwitchReducer
