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
					<Route path="/user/dashboard" component={Dashboard} />

					<Route path="/user/profile" component={User} />
					<Route path="/user/users" component={UserList} />
					<Route path="/user/edit/user/:id" component={EditUser} />
					<Route path="/user/add/user" component={AddUser} />

					<Route path="/user/brends" component={BrendsList} />
					<Route path="/user/edit/brend/:id" component={EditBrend} />
					<Route path="/user/add/brend" component={AddBrend} />

					<Route path="/user/products" component={ProductList} />
					<Route path="/user/edit/product/:id" component={EditProduct} />
					<Route path="/user/add/product" component={AddProduct} />

					<Route path="/user/categories" component={CategoryList} />
					<Route path="/user/add/category" component={AddCategory} />
					<Route path="/user/edit/category/:id" component={EditCategory} />
				</div>
			</div>
		)
	}
}
