import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { auth } from '../../../firebase'
import { setUserInfo, clearUserInfo } from '../../../redux/actions'
import { FaFlag } from 'react-icons/fa'

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
				window.location.href = '/'
			})
			.catch(err => {
				console.log(err)
			})
	}
	render() {
		return (
			<>
				<nav className="header-navbar fixed-top">
					<div className="navbar-wrapper">
						<div className="navbar-header expanded">
							<h3 className="brand-text">Modern Admin</h3>
						</div>
						<div className="navbar-container ">
							<div className="navbar-collapse">
								<ul className="nav navbar-nav ">
									<li className="dropdown dropdown-user nav-item">
										<Link to="#" className="dropdown-toggle nav-link dropdown-user-link" data-toggle="dropdown">
											<span className="mr-1">
												Hello, <span className="user-name ">{this.props.user !== null ? this.props.user.displayName : ''}</span>
											</span>
											<span className="avatar avatar-online" />
										</Link>
										<div className="dropdown-menu dropdown-menu-right">
											<Link to="/" className="dropdown-item">
												View Shop
											</Link>

											{/* <Link to="#" className="dropdown-item">
												Task
											</Link> */}

											<div className="dropdown-divider" />
											<Link to="#" className="dropdown-item" onClick={this.signOut}>
												Logout
											</Link>
										</div>
									</li>
									{/* <li className="dropdown dropdown-language nav-item">
										<Link to="#" className="dropdown-toggle nav-link" id="dropdown-flag" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<FaFlag />

											<span className="selected-language" />
										</Link>
										<div className="dropdown-menu" aria-labelledby="dropdown-flag">
											<Link to="#" className="dropdown-item">
												English
											</Link>
											<Link to="#" className="dropdown-item">
												French
											</Link>
										</div>
									</li> */}
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</>
		)
	}

	static mapStateToProps = state => {
		return {
			user: state.userInfo
		}
	}

	static mapStateToDispatch = dispatch => {
		return {
			setUserInfo: data => dispatch(setUserInfo(data)),
			clearUserInfo: () => dispatch(clearUserInfo())
		}
	}
}

export default connect(
	Header.mapStateToProps,
	Header.mapStateToDispatch
)(Header)
