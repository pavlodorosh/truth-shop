import React, { Component } from 'react'
// import { FaHome, FaAlignJustify } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const setActiveNavLink = e => {
	let links = Array.from(document.querySelectorAll('.navigation .nav-item'))
	e.preventDefault()
	links.forEach(node => {
		node.classList.remove('active')
	})
	e.currentTarget.classList.add('active')
}

const Navbar = () => {	
		return (
			<div className="col-md-3">
				<div className="row">
					<div className="main-menu-content">
						<ul className="navigation navigation-main">
							<li className="nav-item active" onClick={setActiveNavLink}>
								<Link to="/admin/dashboard">
									<span className="menu-title">eCommerce Dashboard</span>
								</Link>
							</li>
							<li className="nav-item" onClick={setActiveNavLink}>
								<Link to="/admin/categories">
									<span className="menu-title">Categories</span>
								</Link>
							</li>
							<li className="nav-item" onClick={setActiveNavLink}>
								<Link to="/admin/products">
									<span className="menu-title">Products</span>
								</Link>
							</li>
							
							<li className="nav-item" onClick={setActiveNavLink}>
								<Link to="/admin/attributes">
									<span className="menu-title">Attributes</span>
								</Link>
							</li>
							<li className="nav-item" onClick={setActiveNavLink}>
								<Link to="/admin/brends">
									<span className="menu-title">Brends</span>
								</Link>
							</li>
							<li className="nav-item" onClick={setActiveNavLink}>
								<Link to="/admin/sizes">
									<span className="menu-title">Sizes</span>
								</Link>
							</li>
							<li className="nav-item" onClick={setActiveNavLink}>
								<Link to="/admin/orders">
									<span className="menu-title">Orders</span>
								</Link>
							</li>
							<li className="nav-item" onClick={setActiveNavLink}>
								<Link to="/admin/pages">
									<span className="menu-title">Pages</span>
								</Link>
							</li>
							<li className="nav-item" onClick={setActiveNavLink}>
								<Link to="/admin/emails">
									<span className="menu-title">E-mails</span>
								</Link>
							</li>
							<li className="nav-item" onClick={setActiveNavLink}>
								<Link to="/admin/users">
									<span className="menu-title">Users</span>
								</Link>
							</li>
							<li className="nav-item" onClick={setActiveNavLink}>
								<Link to="/admin/profile">
									<span className="menu-title">My Profile</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		)
}


export default Navbar