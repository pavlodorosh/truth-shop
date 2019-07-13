import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header/Header'
import HeaderAdmin from '../src/admin/components/Header/Header'
import FooterAdmin from '../src/admin/components/Footer/Footer'
import Footer from './components/Footer'

import Front from './pages/Front'
import Catalog from './pages/Catalog'
import Category from './pages/Category'
import SubCategory from './pages/SubCategory'
import Product from './pages/Product'

import About from './pages/About'
import Delivery from './pages/Delivery'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Cookies from './pages/Cookies'

import Search from './pages/Search'
import Favorite from './pages/Favorite'

import Brends from './pages/Brends'

import Contacts from './pages/Contacts'

import Admin from './admin/pages/Admin'

// import './index.css'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// library.add(fas, far, fab)

class App extends Component {
	componentDidUpdate() {
		if (window.location.href.indexOf('/admin') > 0) require('./admin.css')
		else require('./index.css')
	}
	componentDidMount() {
		if (window.location.href.indexOf('/admin') > 0) require('./admin.css')
		else require('./index.css')
	}
	render() {
		return (
			<>
				<header>
					<Route exact path="/" component={Header} />
					<Route path="/(contacts|about|catalog|category|subcategory|product|women|men|accessories|delivery|privacypolicy|cookies|search|favorite|brends)/" component={Header} />
					<Route path="/admin" component={HeaderAdmin} />
				</header>

				<Route exact path="/" component={Front} />
				<Route path="/women" render={props => <SubCategory {...props} subcategory={'Women'} />} />
				<Route path="/men" render={props => <SubCategory {...props} subcategory={'Men'} />} />
				<Route path="/accessories" render={props => <SubCategory {...props} subcategory={'Accessories'} />} />
				<Route path="/category" component={Category} />

				<Route path="/search" component={Search} />
				<Route path="/favorite" component={Favorite} />

				<Route path="/brends" component={Brends} />

				<Route path="/catalog/:parentCat/:cat" component={Catalog} />
				<Route path="/product/:parentCat/:cat/:name" component={Product} />

				<Route path="/contacts" component={Contacts} />
				<Route path="/about" component={About} />
				<Route path="/delivery" component={Delivery} />
				<Route path="/privacypolicy" component={PrivacyPolicy} />
				<Route path="/cookies" component={Cookies} />

				<Route path="/admin" component={Admin} />

				<footer>
					<Route exact path="/" component={Footer} />
					<Route path="/(contacts|about|catalog|category|subcategory|product|women|men|accessories|delivery|privacypolicy|cookies|search|favorite|brends)/" component={Footer} />

					<Route path="/admin" component={FooterAdmin} />
				</footer>
				<div className="scroll-to-top">
					<span class="lnr lnr-chevron-up" />
				</div>
			</>
		)
	}
}

export default App
