import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Front from './pages/Front'
import About from './pages/About'
import Catalog from './pages/Catalog'
import Contacts from './pages/Contacts'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Category from './pages/Category'
import SubCategory from './pages/SubCategory'
import Product from './pages/Product'
import User from '../src/admin/pages/User'
import UserList from '../src/admin/pages/UserList'
import CategoryList from '../src/admin/pages/CategoryList'
import ProductAdd from '../src/admin/pages/ProductAdd'

class App extends Component {
	render() {
		return (
			<>
				{/* <Header />

				<Switch>
					<Route exact path="/" component={Front} />
					<Route exact path="/contacts" component={Contacts} />
					<Route exact path="/about" component={About} />
					<Route exact path="/catalog" component={Catalog} />
					<Route exact path="/category" component={Category} />
					<Route exact path="/subcategory" component={SubCategory} />
					<Route exact path="/product" component={Product} />
					<Route exact path="/user" component={User} />
				</Switch>

				<Footer /> */}
				<User />
			</>
		)
	}
}

export default App
