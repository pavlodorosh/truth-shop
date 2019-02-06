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
				<div className="ama">Header
				<span>menu</span>
				
				</div>
				<Front />
				<div className="test" />
				<div className="ama2">Footer</div>

				<style jsx global>{``}</style>
			</div>
		)
	}
}

export default App
