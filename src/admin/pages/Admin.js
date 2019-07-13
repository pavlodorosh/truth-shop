import React, { Component } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Route } from 'react-router-dom'

import User from './User'
import UserList from './UserList'
import AddUser from './AddUser'
import EditUser from './EditUser'

import Dashboard from './Dashboard'

import CategoryList from './CategoryList'
import AddCategory from './AddCategory'
import EditCategory from './EditCategory'

import ProductList from './ProductList'
import EditProduct from './EditProduct'
import AddProduct from './AddProduct'

import BrendsList from './BrendsList'
import AddBrend from './AddBrend'
import EditBrend from './EditBrend'

import PageList from './PageList'
import AddPage from './AddPage'
import EditPage from './EditPage'

import SizeList from './SizeList'
import EditSize from './EditSize'
import AddSize from './AddSize'

import EmailList from './EmailList'
import EditEmail from './EditEmail'
import AddEmail from './AddEmail'

import OrderList from './OrderList'
import ViewOrder from './ViewOrder'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTrashAlt, faEdit, faPlus)
export default class Admin extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Navbar />
					<Route path="/admin/dashboard" component={Dashboard} />

					<Route path="/admin/profile" component={User} />
					<Route path="/admin/users" component={UserList} />
					<Route path="/admin/edit/admin/:id" component={EditUser} />
					<Route path="/admin/add/user" component={AddUser} />

					<Route path="/admin/brends" component={BrendsList} />
					<Route path="/admin/edit/brend/:id" component={EditBrend} />
					<Route path="/admin/add/brend" component={AddBrend} />

					<Route path="/admin/products" component={ProductList} />
					<Route path="/admin/edit/product/:id" component={EditProduct} />
					<Route path="/admin/add/product" component={AddProduct} />

					<Route path="/admin/categories" component={CategoryList} />
					<Route path="/admin/add/category" component={AddCategory} />
					<Route path="/admin/edit/category/:id" component={EditCategory} />

					<Route path="/admin/pages" component={PageList} />
					<Route path="/admin/add/pages" component={AddPage} />
					<Route path="/admin/edit/pages/:id" component={EditPage} />

					<Route path="/admin/sizes" component={SizeList} />
					<Route path="/admin/add/size" component={AddSize} />
					<Route path="/admin/edit/size/:id" component={EditSize} />

					{/* <Route path="/admin/emails" component={EmailList} />
					<Route path="/admin/add/emails" component={AddEmail} />
					<Route path="/admin/edit/emails/:id" component={EditEmail} /> */}

					<Route path="/admin/orders" component={OrderList} />
					<Route path="/admin/view/order/:id" component={ViewOrder} />
				</div>
			</div>
		)
	}
}
