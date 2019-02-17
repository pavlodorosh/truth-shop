import { combineReducers } from 'redux'
import authModalReducer from './authModalReducer'
import authModalUserFormSwitchReducer from './authModalUserFormSwitchReducer'

const rootReducer = combineReducers({
	authModal: authModalReducer,
	authModalUserFormSwitch: authModalUserFormSwitchReducer
})

export default rootReducer
