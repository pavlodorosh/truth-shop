import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<Header />
				<Navbar />
				<Footer />
			</div>
		)
	}
}
