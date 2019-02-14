import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'bootstrap-4-react'
import product from '../assets/img/product_img.png'
class Catalog extends Component {
	render() {
		return (
			<Container fluid={true}>
				<Container>
					<Row className="no-gutter">
						<Col className="" col="lg-3">
							<Card>
								<Link to="/product">
									<Card.Image src={product} />
								</Link>
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
						<Col className="" col="lg-3">
							<Card>
								<Card.Image src={product} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
						<Col className="" col="lg-3">
							<Card>
								<Card.Image src={product} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
						<Col className="" col="lg-3">
							<Card>
								<Card.Image src={product} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
					<Row className="no-gutter">
						<Col className="" col="lg-3">
							<Card>
								<Card.Image src={product} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
						<Col className="" col="lg-3">
							<Card>
								<Card.Image src={product} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
						<Col className="" col="lg-3">
							<Card>
								<Card.Image src={product} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
						<Col className="" col="lg-3">
							<Card>
								<Card.Image src={product} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
					<Row className="no-gutter">
						<Col className="" col="lg-3">
							<Card>
								<Card.Image src={product} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
						<Col className="" col="lg-3">
							<Card>
								<Card.Image src={product} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
						<Col className="" col="lg-3">
							<Card>
								<Card.Image src={product} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
						<Col className="" col="lg-3">
							<Card>
								<Card.Image src={product} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
								</Card.Body>
								<Card.Footer>
									<Card.Link href="#">Card Link</Card.Link>
									<Card.Link href="#">Another Link</Card.Link>
								</Card.Footer>
							</Card>
						</Col>
					</Row>
				</Container>
			</Container>
		)
	}
}
export default Catalog
