import React, { Component } from 'react'
import { Nav } from 'bootstrap-4-react'

class Footer extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="container">
					<div className="row">
						<div className="d-none d-sm-block col-sm-6 col-md-3 info pl-0">
							<ul className=" list-unstyled  m-0 align-self-center">
								<li>© 2018 TRUTH TRAINING</li>
								<li>Ukraine. Kyiv 04060</li>
								<li>Schuseva st.27 4 office 11</li>
								<li>Tel: +38(097)9113502</li>
							</ul>
						</div>
						<div className="col-sm-6 col-md-3 pl-0 ">
							<Nav flex="column" justifyContent="center">
								<Nav.ItemLink href="#" className="p-0 d-sm-none d-block">
									© 2018 TRUTH TRAINING
								</Nav.ItemLink>
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
						</div>
						<div className="d-none col-sm-6 col-md-3 d-md-block pl-0">
							<span className="column-title"> SOCIAL MEDIA</span>
							<ul className="d-flex list-unstyled social_footer  m-0 align-self-center">
								<li className="facebook">
									<i className="fab fa-facebook-f" />
								</li>
								<li className="google">
									<i className="fab fa-google-plus-g" />
								</li>
								<li className="instagram">
									<i className="fab fa-instagram" />
								</li>
							</ul>
						</div>
						<div className="d-none col-sm-6 col-md-3 d-md-block pl-0">
							<span className="column-title"> BE IN TOUCH WITH US</span>
							<button className="subscribe" as="button" href="#">
								SUBSCRIBE NOW
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
