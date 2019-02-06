import React, { Component } from 'react'
import { Nav, Button, Container, Row, Col } from 'bootstrap-4-react'

class Header extends Component {
	render() {
		return (
			<>
				<Container>
					<Row>
						<Col col="lg-4">logo</Col>
						<Col col="lg-4">
							<Nav>
								<Nav.Item>
									<Nav.Link href="#">ABAUT US</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link href="#">CONTACTS</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link href="#">SHOP</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col col="lg-4">
							<div>
								<Button danger as="a" href="#">
									SING IN
								</Button>
								<Button light as="a" href="#">
									RU
								</Button>
							</div>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default Header
