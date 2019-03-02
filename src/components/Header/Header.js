import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openAuthModal, setUserInfo, clearUserInfo } from '../../redux/actions'
import { auth } from '../../firebase'

import AuthModal from './Auth/AuthModal'

import logo from '../../assets/img/logo.png'

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
					<div className="container not-admin">
						<div className="row">
							<div className="col-lg-4">
								<Link to="/">
									<img src={logo} alt={logo} />
								</Link>
							</div>
							<div className="col-lg-4">
								<nav>
									<Link to="/about">ABOUT US </Link>
									<Link to="/contacts">CONTACTS</Link>
									<Link to="/category">SHOP</Link>
								</nav>
							</div>
							<div className="col-lg-4">
								{this.props.user !== null ? (
									<div className="dropdown">
										<button id="dropdownMenuButton" data-toggle="dropdown" className="btn btn-secondary dropdown-toggle" aria-expanded="false">
											{this.props.user.displayName}
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
								) : (
									<button className="LoginButton" as="button" onClick={this.props.openAuthModal}>
										SIGH IN
									</button>
								)}

								<button as="a" href="#">
									RU
								</button>
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
