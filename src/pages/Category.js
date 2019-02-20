import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, BSpan, Media, BImg } from 'bootstrap-4-react'
import women from '../assets/img/shop_1.jpg'
import accessories from '../assets/img/shop_2.jpg'
import men from '../assets/img/shop_3.jpg'
export default class Category extends Component {
	render() {
		return (
			<div className="CategotyPage">
				<Container fluid={true}>
					<Container>
						<Row className="no-gutter">
							<Col className="pl-0 pr-1" col="lg-4">
								<Media>
									<Link to="/subcategory">
										<BImg className="img-fluid" src={women} />
									</Link>
								</Media>
								<BSpan className="category_name" align="middle">
									WOMEN
								</BSpan>
							</Col>
							<Col className="px-1" col="lg-4">
								<Media>
									<BImg className="img-fluid" src={accessories} />
								</Media>
								<BSpan className="category_name" align="middle">
									ACCESSORIES
								</BSpan>
							</Col>
							<Col className="pr-0 pl-1" col="lg-4">
								<Media>
									<BImg className="img-fluid" src={men} />
								</Media>
								<BSpan className="category_name" align="middle">
									MEN
								</BSpan>
							</Col>
						</Row>
					</Container>
				</Container>
			</div>
		)
	}
}
