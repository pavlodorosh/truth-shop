import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openAuthModal, setUserInfo, clearUserInfo } from '../../redux/actions'
import { auth } from '../../firebase'

import AuthModal from './Auth/AuthModal'
import ReactSVG from 'react-svg'
import logo from '../../assets/img/logo.svg'

import bags from '../../assets/img/icons/shoppingbag.svg'
import heart from '../../assets/img/icons/heart.svg'
import user from '../../assets/img/icons/user.svg'

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
				<div className="top d-none d-md-flex">
					<div className="container-fluid">
						<div className="container not-admin">
							<div className="row align-items-center p-0">
								<div className="col-lg-7 col-md-9 d-flex justify-content-between align-items-center p-0">
									<div className="mail">
										<i className="fal fa-envelope" /> info@truth-Store.com
									</div>
									<div className="phone">
										<i className="fal fa-phone" /> + 380979113502
									</div>
									<div className="cloc">
										<i className="fal fa-clock" /> 6AM - 8PM PST
									</div>
								</div>

								<div className="col-lg-5 col-md-3 d-flex justify-content-end align-items-center p-0">
									<div className="searchbar ">
										<input className="search_input" type="text" name="" placeholder="Search..." />
										<a href="#" className="search_icon">
											<i className="fal fa-search" />
										</a>
									</div>

									<ul className="d-flex list-unstyled lang m-0 align-self-center">
										<li>en</li>
										<li className="active">ru</li>
										<li>ua</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container-fluid">
					<div className="container not-admin p-0">
						<div className="row navigation align-items-center">
							<div className="col-lg-2 col-sm-4 d-none d-md-flex">
								<Link to="/">
									<ReactSVG src={logo} />
								</Link>
							</div>
							<div className="col-lg-8 col-12 p-0">
								<nav className="navbar navbar-expand-md p-0">
									<Link className="d-sm-block d-md-none" to="/">
										<ReactSVG src={logo} />
									</Link>

									<button
										className="navbar-toggler"
										type="button"
										data-toggle="collapse"
										data-target="#navbar1"
										aria-controls="navbar1"
										aria-expanded="false"
										aria-label="Toggle navigation">
										<i className="fa fa-bars" />
									</button>

									<div className="collapse navbar-collapse" id="navbar1">
										<ul className="navbar-nav mr-auto">
											<li className="nav-item">
												<Link to="/men">MEN </Link>
											</li>
											<li className="nav-item">
												<Link to="/women">WOMEN </Link>
											</li>
											<li className="nav-item">
												<Link to="/accessories">ACCESSORIES </Link>
											</li>
											<li className="nav-item">
												<Link to="/about">ABOUT US </Link>
											</li>
											<li className="nav-item">
												<Link to="/contacts">CONTACTS</Link>
											</li>
											<li className="nav-item">
												<Link to="/brends">BRENDS</Link>
											</li>
										</ul>
									</div>
								</nav>
								<nav />
							</div>
							<div className="icon col-lg-2 d-none d-md-flex justify-content-end p-0">
								<ul className="d-flex list-unstyled top-links m-0 justify-content-end">
									<li>
										{this.props.user !== null ? (
											<div className="d-flex flex-row">
												<ReactSVG src={user} />
												<div className="dropdown">
													<button id="dropdownMenuButton" data-toggle="dropdown" className="dropdown-toggle" aria-expanded="false">
														{/* {this.props.user.displayName} */}
													</button>
													<div aria-labelledby="dropdownMenuButton" className="dropdown-menu" x-placement="bottom-start">
														<Link className="dropdown-item" to="/user/dashboard">
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
												<ReactSVG src={user} />
											</span>
										)}
									</li>
									<li>
										<ReactSVG src={heart} />
									</li>
									<li>
										<ReactSVG src={bags} />
									</li>
								</ul>
							</div>
							<AuthModal />
						</div>
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
