import React, { Component } from 'react'
import Front from './pages/Front'
import './App'

class App extends Component {
	state = {
		age: 18,
		name: 'Pasha'
	}

	render() {
		return (
			<div>
				<div className="ama">Header</div>
				<Front />
				<p>
					Hello <h1>Tolik</h1>
				</p>
				<div className="ama2">Footer</div>

				<style jsx global>{``}</style>
			</div>
		)
	}
}

export default App
