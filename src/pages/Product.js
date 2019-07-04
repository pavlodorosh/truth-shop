import React, { Component } from 'react'
import { Modal } from 'bootstrap-4-react'
import { database } from '../firebase'
// import product from '../assets/img/product_img.png'
import size_men from '../assets/img/size_men.png'
import size_women from '../assets/img/size_women.png'

class Product extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: {},
			product: '',
			productId: []
		}
	}

	getProductsFromDatabase = () => {
		database.ref('/products').on('value', snapshot => {
			this.setState(
				{
					products: snapshot.val()
				},
				() => {
					this.setState({ product: this.filteredAndReducedProducts() })
				}
			)
		})
	}

	componentDidMount = () => {
		this.getProductsFromDatabase()
	}

	toLowerCaseString = data => {
		return data.toLowerCase()
	}

	filteredAndReducedProducts = () => {
		const { match } = this.props

		if (this.state.products !== null) {
			const filtered = Object.keys(this.state.products)
				.filter(
					item =>
						match.url ===
						`/product/${this.toLowerCaseString(this.state.products[item].parentCategory)}/${this.state.products[item].category}/${this.toLowerCaseString(
							this.state.products[item].name.en
						)}`
				)
				.reduce((obj, key) => {
					this.setState({ productId: [key] })

					return {
						...obj,
						[key]: this.state.products[key]
					}
				}, {})

			return filtered
		}
		return null
	}

	render() {
		const { product, productId } = this.state

		return (
			<div className="container-fluid product">
				<div className="container">
					<div className="row no-gutter">
						<div className="pl-0 pr-1 col-md-6 col-12">
							<div id="carousel-custom" className="carousel slide" data-ride="carousel">
								<div className="carousel-inner">
									<div className="carousel-item active">
										<img alt="" className="img-fluid" src={product && product[productId].groups[0].imagesUrl[0]} />
									</div>
									<div className="carousel-item ">
										<img alt="" className="img-fluid" src={product && product[productId].groups[0].imagesUrl[0]} />
									</div>
									<div className="carousel-item ">
										<img alt="" className="img-fluid" src={product && product[productId].groups[0].imagesUrl[0]} />
									</div>
									<a className="left carousel-control" href="#carousel-custom" data-slide="prev">
										<i className="fal fa-angle-left" />
									</a>
									<a className="right carousel-control" href="#carousel-custom" data-slide="next">
										<i className="fal fa-angle-right" />
									</a>
								</div>

								{/* Indicators */}
								<ol className="carousel-indicators">
									<li data-target="#carousel-custom" data-slide-to="0" className="active">
										<img alt="" className="img-fluid" src={product && product[productId].groups[0].imagesUrl[0]} />
									</li>
									<li data-target="#carousel-custom" data-slide-to="1" className="active">
										<img alt="" className="img-fluid" src={product && product[productId].groups[0].imagesUrl[0]} />
									</li>
									<li data-target="#carousel-custom" data-slide-to="2" className="active">
										<img alt="" className="img-fluid" src={product && product[productId].groups[0].imagesUrl[0]} />
									</li>
								</ol>
							</div>
						</div>

						<div className="pr-0 pl-1 col-md-6">
							<div className="product_title">{product && product[productId].name.en}</div>
							<div className="price">${product && product[productId].price}</div>
							{product[productId] && (
								<div className="product_size">
									<span>Choose your size</span>
									<span className="nav-link size_guide d-xl-none" data-toggle="modal" data-target="#exampleModal">
										SIZE GUIDE
									</span>
									<ul className="d-flex list-unstyled m-0 align-self-center">
										<li>S</li>
										<li>M</li>
										<li>L</li>
										<li>XL</li>
									</ul>
								</div>
							)}
							<div className="product_color">
								<span>Choose color</span>
								<ul className="d-flex list-unstyled m-0 align-self-center">
									<li className="green" />
									<li className="blue active" />
									<li className="red" />
									<li className="black" />
								</ul>
							</div>
							<div className="add_cart">
								<button type="button" className="button-cart">
									ADD TO CART
								</button>
							</div>
							<div className="product_description">
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item">
										<span className="nav-link active" data-toggle="tab" href="#details" role="tab">
											DETAILS
										</span>
									</li>
									<li className="nav-item">
										<span className="nav-link" data-toggle="tab" href="#care" role="tab">
											CARE
										</span>
									</li>
									<li className="nav-item">
										<span className="nav-link" data-toggle="tab" href="#return" role="tab">
											RETURN
										</span>
									</li>
									<li className="nav-item">
										{/* Button trigger Modal */}
										<span className="nav-link size_guide d-xl-block d-none" data-toggle="modal" data-target="#exampleModal">
											SIZE GUIDE
										</span>
									</li>
								</ul>

								<div className="tab-content">
									<div className="tab-pane active" id="details" role="tabpanel">
										{product && product[productId].description.en}
									</div>
									<div className="tab-pane" id="care" role="tabpanel">
										{product && product[productId].care.en}
									</div>
									<div className="tab-pane" id="return" role="tabpanel">
										{product && product[productId].return.en}
									</div>
								</div>

								{/* Modal */}
								<Modal id="exampleModal" fade>
									<Modal.Dialog>
										<Modal.Content>
											<Modal.Header>
												<Modal.Title>SIZE GUIDE</Modal.Title>
												<Modal.Close>
													<span aria-hidden="true">&times;</span>
												</Modal.Close>
											</Modal.Header>
											<Modal.Body>
												Use the chart below to determine your size. If you’re on the borderline between two sizes, order the smaller size for a tighter fit or the larger size
												for a looser fit. If your measurements for chest and waist correspond to two different suggested sizes, order the size indicated by your chest
												measurement.
												<div className="row d-flex">
													<div className="col-lg-6">
														MALE
														<img alt="" className="img-fluid" src={size_men} />
													</div>
													<div className="col-lg-6">
														FEMALE
														<img alt="" className="img-fluid" src={size_women} />
													</div>
												</div>
											</Modal.Body>
										</Modal.Content>
									</Modal.Dialog>
								</Modal>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Product
