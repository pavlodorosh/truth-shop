import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openAuthModal, setUserInfo, clearUserInfo } from '../../redux/actions'
import { auth } from '../../firebase'

import AuthModal from './Auth/AuthModal'
import ReactSVG from 'react-svg'
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
				<div className="top">
					<div className="container-fluid">
						<div className="container not-admin">
							<div className="row">
								<div className="col-xl-5  col-md-6 d-flex justify-content-between align-items-center">
									<div className="mail">info@truth-Store.com </div>
									<div className="shipping">
										Free shipping! <span>See Details</span>
									</div>
								</div>

								<div className="col-xl-6 offset-xl-1 col-md-6 d-flex justify-content-between align-items-center">
									<div className="phone">+ 38 (097) 9113502</div>
									<div className="cloc">6AM - 8PM PST</div>

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
					<div className="container not-admin">
						<div className="row align-items-center">
							<div className="col-lg-2">
								<Link to="/">
									<ReactSVG src={logo} />
								</Link>
							</div>
							<div className="col-lg-8">
								<nav className="navbar navbar-expand-lg navbar-white bg-white">
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
										<span className="navbar-toggler-icon" />
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
												<Link to="/">BREND</Link>
											</li>
										</ul>
									</div>
								</nav>
								<nav />
							</div>
							<div className="col-lg-2">
								<ul className="d-flex list-unstyled top-links m-0 justify-content-end">
									<li>
										<i className="fal fa-search" />
									</li>
									<li>
										{this.props.user !== null ? (
											<div className="d-flex flex-row">
												<i className="fal fa-user" />
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
												<i className="fal fa-user" />
											</span>
										)}
									</li>
									<li>
										<i className="fal fa-heart" />
									</li>
									<li>
										<i className="fal fa-shopping-bag" />
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
