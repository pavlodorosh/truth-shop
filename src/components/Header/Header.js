import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openAuthModal, setUserInfo, clearUserInfo } from '../../redux/actions'
import { auth } from '../../firebase'
import ReactSVG from 'react-svg'

import AuthModal from './Auth/AuthModal'
import logo from '../../assets/img/logo.svg'

class Header extends Component {
	componentDidMount() {
		auth.onAuthStateChanged(userSign => {
			if (userSign) {
				this.props.setUserInfo(userSign)
			}
		})
	}

	signOut = () => {
		auth.signOut()
			.then(() => {
				console.log('Вроде как вышли')
				this.props.clearUserInfo()
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<>
				<div className="container-fluid">
					<div className="row navigation">
						<div className="col-4  order-0 col-sm-3  order-sm-1 col-md-3  order-md-1 col-lg-2 order-lg-1  col-xl-2  logo ">
							<Link to="/">
								<ReactSVG src={logo} />
							</Link>
						</div>

						<div className="col-12 order-4 col-sm-12 order-sm-4 col-md-12 order-md-4 col-lg-4 order-lg-2  col-xl-5  menu-header ">
							<div className="row ">
								<nav className="navbar navbar-expand-lg ">
									<div className="collapse navbar-collapse" id="navbar1">
										<ul className="navbar-nav ">
											<li className="nav-item">
												<Link to="/men">Men </Link>
											</li>
											<li className="nav-item">
												<Link to="/women">Women </Link>
											</li>
											<li className="nav-item">
												<Link to="/kids">Kids </Link>
											</li>
											<li className="nav-item">
												<Link to="/products">Products</Link>
											</li>
											<li className="nav-item">
												<Link to="/accessories">Accessories</Link>
											</li>
											<li className="nav-item">
												<Link to="/brends">Brends</Link>
											</li>
										</ul>
									</div>
								</nav>
							</div>
						</div>

						<div className="col-12 order-3 col-sm-4  order-sm-2 col-md-4  order-md-2 col-lg-3 order-lg-3  col-xl-2  search ">
							<div className="row">
								<div className="searchbar">
									<input className="search_input" type="text" name="" placeholder="Search..." />
									<a className="search_icon" >
										<span class="lnr lnr-magnifier" />
									</a>
								</div>
							</div>
						</div>

						<div className="col-8  order-1 col-sm-5  order-sm-3 col-md-5  order-md-3 col-lg-3 order-lg-4  col-xl-3  lang-top-links ">
							<ul className="lang">
								<li>en</li>
								<li className="active">ru</li>
								<li>ua</li>
							</ul>

							<ul className="top-links">
								<li className="user">
									{this.props.user !== null ? (
										<div className="block-user">
											<span class="lnr lnr-user" />
											<div className="dropdown">
												<button id="dropdownMenuButton" data-toggle="dropdown" className="dropdown-toggle" aria-expanded="false">
													{/* {this.props.user.displayName} */}
												</button>
												<div aria-labelledby="dropdownMenuButton" className="dropdown-menu" x-placement="bottom-start">
													<Link className="dropdown-item" to="/admin/dashboard">
														Admin Panel
													</Link>
													<Link className="dropdown-item" to="/" onClick={this.signOut}>
														Sign Out
													</Link>
												</div>
											</div>
										</div>
									) : (
										<span onClick={this.props.openAuthModal}>
											<span class="lnr lnr-user" />
										</span>
									)}
								</li>
								<li className="heart">
									<span class="lnr lnr-heart" />
									<span className="count-heart">0</span>
								</li>
								<li className="bags">
									<span class="lnr lnr-cart" />
									<span className="count-cart">0</span>
								</li>
							</ul>
							<nav className="navbar navbar-expand-lg ">
								<button
									className="navbar-toggler"
									type="button"
									data-toggle="collapse"
									data-target="#navbar1"
									aria-controls="navbar1"
									aria-expanded="false"
									aria-label="Toggle navigation">
									<span class="lnr lnr-menu" />
								</button>
							</nav>
						</div>

						<AuthModal />
					</div>
				</div>
			</>
		)
	}

	static mapStateToProps = state => {
		return {
			user: state.userInfo
		}
	}

	static mapDispatchToProps = dispatch => {
		return {
			openAuthModal: () => dispatch(openAuthModal()),
			setUserInfo: data => dispatch(setUserInfo(data)),
			clearUserInfo: () => dispatch(clearUserInfo())
		}
	}
}

export default connect(
	Header.mapStateToProps,
	Header.mapDispatchToProps
)(Header)
