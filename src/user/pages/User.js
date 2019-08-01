import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import { Route } from 'react-router-dom'

import Orderuser from './Orderuser'
import Profile from './Profile'
import Subscribe from './Subscribes'
import Wishlist from './Wishlist'
import Wishproduct from './Wishproduct'
import Changepassword from './Changepassword'
import EditProfile from './EditProfile'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrashAlt, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faTrashAlt, faEdit, faPlus)
export default class User extends Component {
	render() {
		return (
			<div className="container-fluid user_page">
				<div className="container">
					<div className="row">
						<Navbar />

						<Route path="/user/orderuser" component={Orderuser} />

						<Route path="/user/profile" component={Profile} />

						<Route path="/user/subscribes" component={Subscribe} />

						<Route path="/user/wishlist" component={Wishlist} />

						<Route path="/user/wishproduct" component={Wishproduct} />

						<Route path="/user/password" component={Changepassword} />

						<Route path="/user/edit_profile" component={EditProfile} />
					</div>
				</div>
			</div>
		)
	}
}
