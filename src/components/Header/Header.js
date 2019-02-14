import React, { Component } from 'react'
import { Nav, Button, Container, Row, Col, Media, BImg, BDiv } from 'bootstrap-4-react'
import { Link } from 'react-router-dom'

import AuthModal from './Auth/AuthModal'

import logo from '../../assets/img/logo.png'

class Header extends Component {
	constructor() {
		super()

		this.state = {
			modalIsOpen: false
		}
		this.openModal = this.openModal.bind(this)
		this.closeModal = this.closeModal.bind(this)
	}

	openModal = () => {
		this.setState({ modalIsOpen: true })
	}

	closeModal = () => {
		this.setState({ modalIsOpen: false })
	}

	render() {
		return (
			<Container fluid={true}>
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
								<Link to="/about">ABOUT US</Link>
								<Link to="/contacts">CONTACTS</Link>
								<Link to="/category">SHOP</Link>
							</Nav>
						</Col>
						<Col alignSelf="center" col="lg-4">
							<BDiv display="flex" justifyContent="center">
								<Button danger as="button" onClick={this.openModal}>
									SING IN
								</Button>

								<Button light as="a" href="#">
									RU
								</Button>
							</BDiv>
						</Col>
						<AuthModal modalIsOpen={this.state.modalIsOpen} />
					</Row>
				</Container>
			</Container>
		)
	}
}

export default Header
