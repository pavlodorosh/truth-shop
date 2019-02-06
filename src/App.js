import React, { Component } from 'react'
import Front from './pages/Front'
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
				<Front />
				<Footer />
				<style jsx global>{``}</style>
			</div>
		)
	}
}

export default App
