import React, { Component } from 'react'
import { Nav, Button, Container, Row, Col } from 'bootstrap-4-react'

class Footer extends Component {
	render() {
		return (
			<>
				<Container>
					<Row>
						<Col col="lg-3">COP 2018</Col>
						<Col col="lg-3">NAV</Col>
						<Col col="lg-3">SOCIAL MEDIA</Col>
						<Col col="lg-3">BE IN TOUCH WITH US</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default Footer
