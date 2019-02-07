import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Front from './pages/Front'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
	state = {
		age: 18,
		name: 'Pasha'
	}

	render() {
		return (
			<div>
				<Header />

				<Switch>
					<Route exact path="/" component={Front}>
						<Front />
					</Route>
					<Route exact path="/about" component={About}>
						<About />
					</Route>
					<Route exact path="/catalog" component={About}>
						<About />
					</Route>
				</Switch>

				<Footer />
			</div>
		)
	}
}

export default App
