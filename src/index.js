import React from 'react'
import ReactDOM from 'react-dom'

//Router
import { BrowserRouter } from 'react-router-dom'
//Redux
import { createStore } from 'redux'
//Firebase
import firebase from './firebase'

import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'

function products(state = [], action) {
	if (action.type === 'ADD_ITEM') {
		return [...state, action.payload]
	}
	console.log(action)
	return state
}

const store = createStore(products)

store.subscribe(() => {
	console.log(store.getState())
})

store.dispatch({
	type: 'ADD_ITEM',
	payload: 'T-Shirt'
})

store.dispatch({
	type: 'ADD_ITEM',
	payload: 'T-Shirt2'
})

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
