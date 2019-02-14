import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Front from './pages/Front'
import About from './pages/About'
import Catalog from './pages/Catalog'
import Contacts from './pages/Contacts'
import Header from './components/Header'
import Footer from './components/Footer'
import Category from './pages/Category'
import SubCategory from './pages/SubCategory'
import Product from './pages/Product'

class App extends Component {
	render() {
		return (
			<div>
				<Header />

				<Switch>
					<Route exact path="/" component={Front} />
					<Route exact path="/contacts" component={Contacts} />
					<Route exact path="/about" component={About} />
					<Route exact path="/catalog" component={Catalog} />
					<Route exact path="/category" component={Category} />
					<Route exact path="/subcategory" component={SubCategory} />
					<Route exact path="/product" component={Product} />
				</Switch>

				<Footer />
			</div>
		)
	}
}

export default App
