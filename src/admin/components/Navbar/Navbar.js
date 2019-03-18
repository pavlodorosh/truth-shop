import React, { Component } from 'react'
import { FaHome, FaUserCircle, FaAlignJustify } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
	setActiveNavLink = e => {
		let links = Array.from(document.querySelectorAll('.navigation .nav-item'))
		e.preventDefault()
		links.forEach(node => {
			node.classList.remove('active')
		})
		e.currentTarget.classList.add('active')
	}

	render() {
		return (
			<div className="main-menu menu-fixed ">
				<div className="main-menu-content">
					<ul className="navigation navigation-main">
						<li className="nav-item active" onClick={this.setActiveNavLink}>
							<Link to="/user/dashboard">
								<FaHome />
								<span className="menu-title">eCommerce Dashboard</span>
							</Link>
						</li>

						<li className="nav-item" onClick={this.setActiveNavLink}>
							<Link to="/user/profile">
								<FaUserCircle />
								<span className="menu-title">My Profile</span>
							</Link>
						</li>

						<li className="nav-item" onClick={this.setActiveNavLink}>
							<Link to="/user/users">
								<FaUserCircle />
								<span className="menu-title">Users</span>
							</Link>
						</li>

						<li className="nav-item" onClick={this.setActiveNavLink}>
							<Link to="/user/categories">
								<FaAlignJustify />
								<span className="menu-title">Categories</span>
							</Link>
						</li>

						<li className="nav-item" onClick={this.setActiveNavLink}>
							<Link to="/user/products">
								<FaAlignJustify />
								<span className="menu-title">Products</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
