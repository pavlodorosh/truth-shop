import initialState from './initialState'

const getCategoriesReducer = (state = initialState.categoriesList, action) => {
	switch (action.type) {
		case 'GET_CATEGORIES':
			return (state = action.categories)
		default:
			return state
	}
}

export default getCategoriesReducer
