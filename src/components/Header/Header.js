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
								<div className="col-sm-5 d-flex justify-content-between align-items-center">
									<div className="mail">info@truth-Store.com </div>
									<div className="shipping">
										Free shipping! <span>See Details</span>
									</div>
								</div>
								<div className="col-sm-1" />
								<div className="col-sm-6 d-flex justify-content-between align-items-center">
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
								<nav>
									<Link to="/men">MEN </Link>
									<Link to="/women">WOMEN </Link>
									<Link to="/accessories">ACCESSORIES </Link>
									<Link to="/about">ABOUT US </Link>
									<Link to="/contacts">CONTACTS</Link>
									<Link to="/">BREND</Link>
								</nav>
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
