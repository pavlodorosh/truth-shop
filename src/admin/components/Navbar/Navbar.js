import React, { Component } from 'react'
// import { FaHome, FaAlignJustify } from 'react-icons/fa'
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
			<div className="col-md-3">
				<div className="row">
					<div className="main-menu-content">
						<ul className="navigation navigation-main">
							<li className="nav-item active" onClick={this.setActiveNavLink}>
								<Link to="/user/dashboard">
									<span className="menu-title">eCommerce Dashboard</span>
								</Link>
							</li>
							<li className="nav-item" onClick={this.setActiveNavLink}>
								<Link to="/user/categories">
									<span className="menu-title">Categories</span>
								</Link>
							</li>
							<li className="nav-item" onClick={this.setActiveNavLink}>
								<Link to="/user/products">
									<span className="menu-title">Products</span>
								</Link>
							</li>
							<li className="nav-item" onClick={this.setActiveNavLink}>
								<Link to="/user/brends">
									<span className="menu-title">Brends</span>
								</Link>
							</li>
							<li className="nav-item" onClick={this.setActiveNavLink}>
								<Link to="/user/sizes">
									<span className="menu-title">Sizes</span>
								</Link>
							</li>
							<li className="nav-item" onClick={this.setActiveNavLink}>
								<Link to="/user/orders">
									<span className="menu-title">Orders</span>
								</Link>
							</li>
							<li className="nav-item" onClick={this.setActiveNavLink}>
								<Link to="/user/pages">
									<span className="menu-title">Pages</span>
								</Link>
							</li>
							<li className="nav-item" onClick={this.setActiveNavLink}>
								<Link to="/user/emails">
									<span className="menu-title">E-mails</span>
								</Link>
							</li>
							<li className="nav-item" onClick={this.setActiveNavLink}>
								<Link to="/user/users">
									<span className="menu-title">Users</span>
								</Link>
							</li>
							<li className="nav-item" onClick={this.setActiveNavLink}>
								<Link to="/user/profile">
									<span className="menu-title">My Profile</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
