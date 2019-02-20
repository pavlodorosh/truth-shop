import React, { Component } from 'react'
import { Nav, Button, Container, Row, Col, Media, BImg, BDiv } from 'bootstrap-4-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openAuthModal, setUserInfo } from '../../redux/actions'
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

	render() {
		return (
			<header>
				<Container fluid>
					<Container>
						<Row>
							<Col col="lg-4">
								<Media>
									<Link to="/">
										<BImg src={logo} />
									</Link>
								</Media>
							</Col>
							<Col alignSelf="center" col="lg-4">
								<Nav justifyContent="center" alignItems="center">
									<Link to="/about">ABOUT US </Link>
									<Link to="/contacts">CONTACTS</Link>
									<Link to="/category">SHOP</Link>
								</Nav>
							</Col>
							<Col alignSelf="center" col="lg-4">
								<BDiv display="flex" justifyContent="center">
									<Button className="LoginButton" as="button" onClick={this.props.openAuthModal}>
										SIGH IN
									</Button>
									<Dropdown>
										<Dropdown.Button secondary id="dropdownMenuButton">
											Dropdown button
										</Dropdown.Button>
										<Dropdown.Menu aria-labelledby="dropdownMenuButton">
											<Dropdown.Item href="#" active>
												Action
											</Dropdown.Item>
											<Dropdown.Item disabled>Another action</Dropdown.Item>
											<Dropdown.Item>Something else here</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
									<Button light as="a" href="#">
										RU
									</Button>
								</BDiv>
							</Col>
							<AuthModal />
						</Row>
					</Container>
				</Container>
			</header>
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
			setUserInfo: data => dispatch(setUserInfo(data))
		}
	}
}

export default connect(
	Header.mapStateToProps,
	Header.mapDispatchToProps
)(Header)
