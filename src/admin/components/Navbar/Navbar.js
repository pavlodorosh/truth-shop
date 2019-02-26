import React, { Component } from 'react'
import { FaHome, FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
	render() {
		return (
			<div className="main-menu menu-fixed ">
				<div className="main-menu-content">
					<ul className="navigation navigation-main">
						<li className="active">
							<Link to="/">
								<FaHome />

								<span className="menu-title">eCommerce Dashboard</span>
							</Link>
						</li>

						<li className="nav-item">
							<Link to="/">
								<FaUserCircle />

								<span className="menu-title">User</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
