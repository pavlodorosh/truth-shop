import React, { Component } from 'react'
import { Nav, Button, Container, Row, Col, List, BDiv, BSpan } from 'bootstrap-4-react'

class Footer extends Component {
	render() {
		return (
			<>
				<Container fluid={true}>
					<Container>
						<Row>
							<Col col="lg-3">
								<List unstyled>
									<List.Item>2018 TRUTH TRAINING</List.Item>
									<List.Item>Ukraine. Kyiv 04060</List.Item>
									<List.Item>Schuseva st.27/4 office 11</List.Item>
									<List.Item>Tel: +380(097)9113502</List.Item>
								</List>
							</Col>
							<Col col="lg-3">
								<Nav flex="column" justifyContent="center">
									<Nav.ItemLink href="#" className="p-0">
										Delivery
									</Nav.ItemLink>
									<Nav.ItemLink href="#" className="p-0">
										Privacy Policy
									</Nav.ItemLink>
									<Nav.ItemLink href="#" className="p-0">
										Q&A
									</Nav.ItemLink>
									<Nav.ItemLink href="#" className="p-0">
										Turms and conditions
									</Nav.ItemLink>
								</Nav>
							</Col>
							<Col col="lg-3">
								<BSpan> SOCIAL MEDIA</BSpan>
								<BDiv>
									<Button danger as="a" href="#">
										fa
										<i class="fa fa-facebook" aria-hidden="true" />
									</Button>
									<Button danger as="a" href="#">
										G+
									</Button>
									<Button danger as="a" href="#">
										INST
									</Button>
								</BDiv>
							</Col>
							<Col col="lg-3">
								BE IN TOUCH WITH US
								<Button danger as="a" href="#">
									SUBSCRIBE NOW
								</Button>
							</Col>
						</Row>
					</Container>
				</Container>
			</>
		)
	}
}

export default Footer
