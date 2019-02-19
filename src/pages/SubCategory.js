import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, BSpan, Media, BImg, Breadcrumb } from 'bootstrap-4-react'
import outerwear from '../assets/img/women_1.jpg'
import shirts from '../assets/img/women_2.jpg'
import sportswearen from '../assets/img/women_3.jpg'
import casual from '../assets/img/women_4.jpg'
class SubCategory extends Component {
	render() {
		return (
			<div className="SubCategoty">
				<Container fluid={true}>
					<Container>
						<Row className="no-gutter">
							<nav aria-label="breadcrumb">
								<Breadcrumb>
									<Breadcrumb.Item>
										<a href="#">Home</a>
									</Breadcrumb.Item>
									<Breadcrumb.Item active aria-current="page">
										Library
									</Breadcrumb.Item>
								</Breadcrumb>
							</nav>
						</Row>
						<Row className="no-gutter">
							<Col className="px-0 " col="lg-6">
								<Media>
									<Link to="/catalog">
										<BImg className="img-fluid" src={outerwear} />

										<BSpan className="subcategory_name" align="middle">
											Ouretwear
										</BSpan>
									</Link>
								</Media>
							</Col>
							<Col className="px-0" col="lg-6">
								<Media>
									<BImg className="img-fluid" src={shirts} />
									<BSpan className="subcategory_name" align="middle">
										T-shirts
									</BSpan>
								</Media>
							</Col>

							<Col className="px-0 " col="lg-6">
								<Media>
									<BImg className="img-fluid" src={sportswearen} />
									<BSpan className="subcategory_name" align="middle">
										Sportswear
									</BSpan>
								</Media>
							</Col>
							<Col className="px-0" col="lg-6">
								<Media>
									<BImg className="img-fluid" src={casual} />
									<BSpan className="subcategory_name" align="middle">
										Casual wear
									</BSpan>
								</Media>
							</Col>
						</Row>
					</Container>
				</Container>
			</div>
		)
	}
}

export default SubCategory
