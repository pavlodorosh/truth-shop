import initialState from './initialState'

const authModalReducer = (state = initialState.authModal.isAuthModalOpen, action) => {
	switch (action.type) {
		case 'OPEN_AUTH_MODAL':
			return !state
		default:
			return state
	}
}

export default authModalReducer
