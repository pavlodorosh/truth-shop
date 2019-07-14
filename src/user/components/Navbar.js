import React, { Component } from 'react'
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
			<div className="col-lg-3 p-0">
				<nav role="navigation" className="d-lg-none d-md-block">
					<div id="menuToggle">
						<input type="checkbox" />
						<span />
						<span />
						<span />
						<ul id="menu" className="list-unstyled">
							<li className="usercabinet">Мой кабинет</li>
							<li className="profile active" onClick={this.setActiveNavLink}>
								<Link to="/user/profile">
									<span className="menu-title">Личные данные</span>
								</Link>
							</li>
							<li className="profile" onClick={this.setActiveNavLink}>
								<Link to="/user/wishlist">
									<span className="menu-title">Списки желаний</span>
								</Link>
							</li>
							<li className="profile" onClick={this.setActiveNavLink}>
								<Link to="/user/orderuser">
									<span className="menu-title">Мои заказы</span>
								</Link>
							</li>
							<li className="profile" onClick={this.setActiveNavLink}>
								<Link to="/user/wishproduct">
									<span className="menu-title">Просмотренные товары</span>
								</Link>
							</li>
							<li className="profile" onClick={this.setActiveNavLink}>
								<Link to="/user/subscribes">
									<span className="menu-title">Рассылки</span>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				<ul className="list-unstyled d-lg-block d-md-none" id="sidebar-menu">
					<li className="usercabinet">Мой кабинет</li>
					<li className="profile" onClick={this.setActiveNavLink}>
						<Link to="/user/profile">
							<span className="menu-title">Личные данные</span>
						</Link>
					</li>
					<li className="profile" onClick={this.setActiveNavLink}>
						<Link to="/user/wishlist">
							<span className="menu-title">Списки желаний</span>
						</Link>
					</li>
					<li className="profile" onClick={this.setActiveNavLink}>
						<Link to="/user/orderuser">
							<span className="menu-title">Мои заказы</span>
						</Link>
					</li>
					<li className="profile" onClick={this.setActiveNavLink}>
						<Link to="/user/wishproduct">
							<span className="menu-title">Просмотренные товары</span>
						</Link>
					</li>
					<li className="profile" onClick={this.setActiveNavLink}>
						<Link to="/user/subscribes">
							<span className="menu-title">Рассылки</span>
						</Link>
					</li>
					<li>
						<button className="exit">Выход</button>
					</li>
				</ul>
			</div>
		)
	}
}
