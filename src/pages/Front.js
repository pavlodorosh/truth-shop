import React, { Component } from 'react'
import { Container, Row, Col, BSpan, Media, BImg } from 'bootstrap-4-react'
import women from '../assets/img/women.jpg'
import accessories from '../assets/img/accessories.jpg'
import men from '../assets/img/men.jpg'
class Front extends Component {
	render() {
		return (
			<Container fluid={true}>
				<Container>
					<Row className="no-gutter">
						<Col className="pl-0 pr-1" col="lg-4">
							<Media>
								<BImg className="img-fluid" src={women} />
							</Media>
							<BSpan align="middle">WOMEN</BSpan>
						</Col>
						<Col className="px-1" col="lg-4">
							<Media>
								<BImg className="img-fluid" src={accessories} />
							</Media>
							<BSpan align="middle">ACCESSORIES</BSpan>
						</Col>
						<Col className="pr-0 pl-1" col="lg-4">
							<Media>
								<BImg className="img-fluid" src={men} />
							</Media>
							<BSpan align="middle">MEN</BSpan>
						</Col>
					</Row>
				</Container>
			</Container>
		)
	}
}

export default Front
