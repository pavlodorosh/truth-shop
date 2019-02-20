import { combineReducers } from 'redux'
import authModalReducer from './authModalReducer'
import authModalUserFormSwitchReducer from './authModalUserFormSwitchReducer'
import userInfoReducer from './userInfoReducer'

const rootReducer = combineReducers({
	authModal: authModalReducer,
	authModalUserFormSwitch: authModalUserFormSwitchReducer,
	userInfo: userInfoReducer
})

export default rootReducer
