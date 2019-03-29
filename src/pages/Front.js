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
						<div className="p-0 col-lg-4 d-flex justify-content-center front_block">
							<Link to="/women">
								<img alt="" className="img-fluid" src={women} />
							</Link>

							<span className="category_name ">
								<Link to="/women">WOMEN</Link>
							</span>
							<span className="catygory_link ">
								<Link to="/women">SHOP NOW</Link>
							</span>
						</div>
						<div className="p-0 front_block col-lg-4 d-flex justify-content-center">
							<Link to="/accessories">
								<img alt="" className="img-fluid" src={accessories} />
							</Link>

							<span className="category_name">
								<Link to="/accessories">ACCESSORIES</Link>
							</span>
							<span className="catygory_link ">
								<Link to="/accessories">SHOP NOW</Link>
							</span>
						</div>
						<div className="p-0 front_block col-lg-4 d-flex justify-content-center">
							<Link to="/men">
								<img alt="" className="img-fluid" src={men} />
							</Link>

							<span className="category_name ">
								<Link to="/men">MEN</Link>
							</span>
							<span className="catygory_link ">
								<Link to="/men">SHOP NOW</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Front
