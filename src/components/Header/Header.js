import React from 'react'
import { Nav, Button, Container, Row, Col, Media, BImg, BDiv, Dropdown } from 'bootstrap-4-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openAuthModal } from '../../redux/actions'

import AuthModal from './Auth/AuthModal'

import logo from '../../assets/img/logo.png'

const Header = ({ openAuthModal }) => {
	return (
		<header>
			<Container fluid>
				<Container>
					<Row>
						<Col className="pl-0" col="lg-4 ">
							<Media>
								<Link to="/">
									<BImg src={logo} />
								</Link>
							</Media>
						</Col>
						<Col alignSelf="center" col="lg-4">
							<Nav justifyContent="between" alignItems="center">
								<Link to="/about">ABOUT US</Link>
								<Link to="/contacts">CONTACTS</Link>
								<Link to="/category">SHOP</Link>
							</Nav>
						</Col>
						<Col alignSelf="center" col="lg-4">
							<BDiv display="flex" justifyContent="center">
								<Button className="LoginButton" as="button" onClick={openAuthModal}>
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

const mapStateToProps = () => {
	return {}
}

const mapDispatchToProps = dispatch => {
	return {
		openAuthModal: () => dispatch(openAuthModal())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)
