import React, { Component } from 'react'
import { Nav } from 'bootstrap-4-react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="container">
					<div className="row">
						<div className="col-12 order-1  col-sm-6  order-md-4 col-md-3  order-md-4  info-block">
							<ul className=" list-unstyled  m-0 align-self-center">
								<li>© 2018 TRUTH TRAINING</li>
								<li>Ukraine. Kyiv 04060</li>
								<li>Schuseva st.27 4 office 11</li>
								<li>
									<a href="mailto:info@truth-Store.com">e-mail: info@truth-Store.com</a>
								</li>
								<li>
									<a href="tel:+38 097 911 35 02 ">Tel: +38 097 911 35 02 </a>
								</li>
							</ul>
						</div>

						<div className="col-6 order-2  col-sm-6  order-md-4 col-md-2  order-md-4  footer-link">
							<Nav>
								<Nav.ItemLink href="/men" className="p-0">
									Men
								</Nav.ItemLink>
								<Nav.ItemLink href="/women" className="p-0">
									Women
								</Nav.ItemLink>
								<Nav.ItemLink href="/products" className="p-0">
									Products
								</Nav.ItemLink>
								<Nav.ItemLink href="/accessories" className="p-0">
									Accessories
								</Nav.ItemLink>
								<Nav.ItemLink href="/brends" className="p-0">
									Brends
								</Nav.ItemLink>
							</Nav>
						</div>

						<div className="col-6 order-3  col-sm-6  order-md-4 col-md-2  order-md-4  footer-link">
							<Nav>
								<Nav.ItemLink href="/about" className="p-0">
									About us
								</Nav.ItemLink>
								<Nav.ItemLink href="/delivery" className="p-0">
									Delivery
								</Nav.ItemLink>
								<Nav.ItemLink href="/privacypolicy" className="p-0">
									Privacy Policy
								</Nav.ItemLink>
								<Nav.ItemLink href="/cookies" className="p-0">
									Cookies
								</Nav.ItemLink>
								<Nav.ItemLink href="/Turms and conditions" className="p-0">
									Turms and conditions
								</Nav.ItemLink>
							</Nav>
						</div>

						<div className="col-12 order-4  col-sm-6  order-md-4 col-md-2  order-md-4 social-block">
							<div className="d-flex flex-column">
								<span className="column-title text-center"> SOCIAL MEDIA</span>
								<ul>
									<li className="facebook">
										<Link className="d-sm-block " to="/">
											<FontAwesomeIcon icon={['fab', 'facebook-f']} />
										</Link>
									</li>
									<li className="instagram">
										<Link className="d-sm-block " to="/">
											<FontAwesomeIcon icon={['fab', 'instagram']} />
										</Link>
									</li>
									<li className="telegram">
										<Link className="d-sm-block " to="/">
											<FontAwesomeIcon icon={['fab', 'telegram-plane']} />
										</Link>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-12 order-5  col-sm-6  order-md-4 col-md-3  order-md-4 subscribe-block">
							<div className="d-flex flex-column">
								<span className="column-title text-center"> BE IN TOUCH WITH US</span>
								<button className="subscribe" as="button" href="#">
									SUBSCRIBE NOW
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer
