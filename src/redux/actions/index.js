export const changeAuthForm = () => {
	return {
		type: 'CHANGE_AUTH_FORM'
	}
}

export const checkUserLogin = () => {
	return {
		type: 'CHECK_USER_LOGIN'
	}
}

export const clearUserInfo = () => {
	return {
		type: 'CLEAR_USER_INFO'
	}
}

export const openAuthModal = () => {
	return {
		type: 'OPEN_AUTH_MODAL'
	}
}

export const setUserInfo = user => {
	return {
		type: 'SET_USER_INFO',
		payload: {
			currentUser: user
		}
	}
}
