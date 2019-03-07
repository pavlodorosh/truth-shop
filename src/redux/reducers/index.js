import { combineReducers } from 'redux'
import authModalReducer from './authModalReducer'
import authModalUserFormSwitchReducer from './authModalUserFormSwitchReducer'
import userInfoReducer from './userInfoReducer'
import getCategoriesReducer from './getCategoriesReducer'

const rootReducer = combineReducers({
	authModal: authModalReducer,
	authModalUserFormSwitch: authModalUserFormSwitchReducer,
	userInfo: userInfoReducer,
	getCategories: getCategoriesReducer
})

export default rootReducer
