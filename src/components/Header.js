import React, { Component } from 'react'
import { Nav, Button, Container, Row, Col, Media, BImg, BDiv } from 'bootstrap-4-react'
import logo from '../assets/img/logo.png'

class Header extends Component {
	render() {
		return (
			<Container fluid={true}>
				<Container>
					<Row>
						<Col col="lg-4">
							<Media>
								<BImg src={logo} />
							</Media>
						</Col>
						<Col alignSelf="center" col="lg-4">
							<Nav justifyContent="center" alignItems="center">
								<Nav.ItemLink active href="#">
									ABAUT US
								</Nav.ItemLink>
								<Nav.ItemLink href="#">CONTACTS</Nav.ItemLink>
								<Nav.ItemLink href="#">SHOP</Nav.ItemLink>
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
