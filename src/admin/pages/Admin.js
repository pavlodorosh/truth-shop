import React, {useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Route } from 'react-router-dom'

import { database } from '../../firebase'

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


import AttributesList from './AttributesList'
import AttributesGroupsList from './AttributesGroupsList'
import EditAttributesGroup from './EditAttributesGroup'
import AddAttributesGroup from './AddAttributesGroup'

import BrendsList from './BrendsList'
import AddBrend from './AddBrend'
import EditBrend from './EditBrend'

import PageList from './PageList'
import AddPage from './AddPage'
import EditPage from './EditPage'

import SizeList from './SizeList'
import EditSize from './EditSize'
import AddSize from './AddSize'

import OrderList from './OrderList'
import ViewOrder from './ViewOrder'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTrashAlt, faEdit, faPlus)


let adminContext = React.createContext({})

let data = {
	attributes: [
		{
			name: 'gender',
			label: 'Gender',
			type: 'system'
		},
		{
			name: 'color',
			label: 'Color',
			type: 'system'
		},
	],
	newAttributeGroup: {
		name: '',
		options: []
	},
	newProduct: {
		active: false,
		name: {
			en: '',
			ru: '',
			ua: ''
		},
		description: {
			en: '',
			ru: '',
			ua: ''
		},
		return: {
			en: '',
			ru: '',
			ua: ''
		},
		care: {
			en: '',
			ru: '',
			ua: ''
		},
		simpleAttributes: []
	},
	
	
}

const Admin = () => {	

	useEffect(()=>{
		database.ref('/attributes').on('value', snapshot => {
			snapshot.val() &&
				Object.keys(snapshot.val()).map((item) => {
					console.log(snapshot.val()[item])
					data.attributes = [...data.attributes, snapshot.val()[item]]
				})		
		})
	})



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

					<Route path="/admin/attributes" component={AttributesList} />
					<Route path="/admin/groups" component={AttributesGroupsList} />
					<Route path="/admin/edit/group/:id" component={EditAttributesGroup} />
					<Route path="/admin/add/group" component={AddAttributesGroup} />

					<Route path="/admin/categories" component={CategoryList} />
					<Route path="/admin/add/category" component={AddCategory} />
					<Route path="/admin/edit/category/:id" component={EditCategory} />

					<Route path="/admin/pages" component={PageList} />
					<Route path="/admin/add/pages" component={AddPage} />
					<Route path="/admin/edit/pages/:id" component={EditPage} />

					<Route path="/admin/sizes" component={SizeList} />
					<Route path="/admin/add/size" component={AddSize} />
					<Route path="/admin/edit/size/:id" component={EditSize} />

					<Route path="/admin/orders" component={OrderList} />
					<Route path="/admin/view/order/:id" component={ViewOrder} />
				</div>
			</div>
	)
}

export const adminData = adminContext
export default Admin