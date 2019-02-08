import React, { Component } from 'react'
import { Nav, Button, Container, Row, Col, Media, BImg, BDiv } from 'bootstrap-4-react'
import { Link } from 'react-router-dom'

import logo from '../assets/img/logo.png'

class Header extends Component {
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
								<Link to="/catalog">SHOP</Link>
							</Nav>
						</Col>
						<Col alignSelf="center" col="lg-4">
							<BDiv display="flex" justifyContent="center">
								<Button danger as="a" href="#">
									SING IN
								</Button>
								<Button light as="a" href="#">
									RU
								</Button>
							</BDiv>
						</Col>
					</Row>
				</Container>
			</Container>
		)
	}
}

export default Header
