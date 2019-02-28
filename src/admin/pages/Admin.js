import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Route } from 'react-router-dom'
import User from './User'
import Dashboard from './Dashboard'

import CategoryList from './CategoryList'

export default class Admin extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Route path="/user/dashboard" component={Dashboard} />
				<Route path="/user/profile" component={User} />
				<Route path="/user/category" component={CategoryList} />
			</div>
		)
	}
}
