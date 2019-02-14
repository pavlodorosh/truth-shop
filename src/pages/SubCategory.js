import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, BSpan, Media, BImg } from 'bootstrap-4-react'
import outerwear from '../assets/img/women_1.jpg'
import shirts from '../assets/img/women_2.jpg'
import sportswearen from '../assets/img/women_3.jpg'
import casual from '../assets/img/women_4.jpg'
class SubCategory extends Component {
	render() {
		return (
			<Container fluid={true}>
				<Container>
					<Row className="no-gutter">
						<Col className="pl-0 pr-1" col="lg-6">
							<Media>
								<Link to="/catalog">
									<BImg className="img-fluid" src={outerwear} />
								</Link>
							</Media>
							<BSpan align="middle">Ouretwear</BSpan>
						</Col>
						<Col className="px-1" col="lg-6">
							<Media>
								<BImg className="img-fluid" src={shirts} />
							</Media>
							<BSpan align="middle">T-shirts</BSpan>
						</Col>
					</Row>
					<Row className="no-gutter">
						<Col className="pl-0 pr-1" col="lg-6">
							<Media>
								<BImg className="img-fluid" src={sportswearen} />
							</Media>
							<BSpan align="middle">Sportswear</BSpan>
						</Col>
						<Col className="px-1" col="lg-6">
							<Media>
								<BImg className="img-fluid" src={casual} />
							</Media>
							<BSpan align="middle">Casual wear</BSpan>
						</Col>
					</Row>
				</Container>
			</Container>
		)
	}
}

export default SubCategory
