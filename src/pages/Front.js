import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import women from '../assets/img/shop_1.jpg'
import accessories from '../assets/img/shop_2.jpg'
import men from '../assets/img/shop_3.jpg'

class Front extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="container">
					<div className="no-gutter row">
						<div className="pl-0 pr-1 col-lg-4">
							<Link to="/women">
								<img alt="" className="img-fluid" src={women} />
							</Link>

							<span className="category_name d-flex justify-content-center">WOMEN</span>
							<span className="catygory_link d-flex justify-content-center">SHOP NOW</span>
						</div>
						<div className="px-1 col-lg-4">
							<Link to="/accessories">
								<img alt="" className="img-fluid" src={accessories} />
							</Link>

							<span className="category_name d-flex justify-content-center">ACCESSORIES</span>
							<span className="catygory_link d-flex justify-content-center">SHOP NOW</span>
						</div>
						<div className="pr-0 pl-1 col-lg-4">
							<Link to="/men">
								<img alt="" className="img-fluid" src={men} />
							</Link>

							<span className="category_name d-flex justify-content-center">MEN</span>
							<span className="catygory_link d-flex justify-content-center">SHOP NOW</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Front
