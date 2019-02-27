import React, { Component } from 'react'
import { Nav, Button, Container, Row, Col, Media, BImg, BDiv, Dropdown } from 'bootstrap-4-react'
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
				<Container fluid>
					<Container className="not-admin">
						<Row>
							<Col col="lg-4">
								<Media>
									<Link to="/">
										<BImg src={logo} />
									</Link>
								</Media>
							</Col>
							<Col alignSelf="center" col="lg-4">
								<Nav justifyContent="between" alignItems="center">
									<Link to="/about">ABOUT US </Link>
									<Link to="/contacts">CONTACTS</Link>
									<Link to="/category">SHOP</Link>
								</Nav>
							</Col>
							<Col alignSelf="center" col="lg-4">
								<BDiv display="flex" justifyContent="center">
									{this.props.user !== null ? (
										<Dropdown>
											<Dropdown.Button secondary id="dropdownMenuButton">
												{this.props.user.displayName}
											</Dropdown.Button>
											<Dropdown.Menu aria-labelledby="dropdownMenuButton">
												<Dropdown.Item>
													<Link to="/user/dashboard">Admin Panel</Link>
												</Dropdown.Item>
												<Dropdown.Item>
													<Link to="/user/profile">My Profile</Link>
												</Dropdown.Item>
												<Dropdown.Item onClick={this.signOut}>Sign Out</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown>
									) : (
										<Button className="LoginButton" as="button" onClick={this.props.openAuthModal}>
											SIGH IN
										</Button>
									)}

									<Button light as="a" href="#">
										RU
									</Button>
								</BDiv>
							</Col>
							<AuthModal />
						</Row>
					</Container>
				</Container>
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
