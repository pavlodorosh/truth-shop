import React, { Component } from 'react'
import { database } from '../../../firebase'
export default class EditProduct extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: {},
			product: ''
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

	filteredAndReducedProducts = () => {
		const { match } = this.props
		if (this.state.products !== null) {
			const filtered = Object.keys(this.state.products)
				.filter(item => match.params.id === item)
				.reduce((obj, key) => {
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
		return (
			<div>
				<div className="app-content">
					<div className="content-wrapper">
						<div className="content-body">
							<div className="row">
								<div className="product_description col-sm-12">
									<ul className="nav nav-tabs" role="tablist">
										<li className="nav-item">
											<span className="nav-link active" data-toggle="tab" href="#home" role="tab">
												EN
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#profile" role="tab">
												RU
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#messages" role="tab">
												UA
											</span>
										</li>
									</ul>

									<div className="tab-content">
										<div className="tab-pane active" id="home" role="tabpanel">
											<div className="form-group">
												<label>Name [en]</label>
												<label className="form-control">Name [en]</label>
											</div>
											<div className="form-group">
												<label>Description [en]</label>
												<label className="form-control">Description [en]</label>
											</div>
											<div className="form-group">
												<label>Return [en]</label>
												<label className="form-control">Description [en]</label>
											</div>
											<div className="form-group">
												<label>Care [en]</label>
												<label className="form-control">Description [en]</label>
											</div>
										</div>
										<div className="tab-pane" id="profile" role="tabpanel">
											<div className="form-group">
												<label>Name [RU]</label>
												<label className="form-control">Name [RU]</label>
											</div>
											<div className="form-group">
												<label>Description [RU]</label>
												<label className="form-control">Description [RU]</label>
											</div>
											<div className="form-group">
												<label>Return [en]</label>
												<label className="form-control">Description [ru]</label>
											</div>
											<div className="form-group">
												<label>Care [en]</label>
												<label className="form-control">Description [ru]</label>
											</div>
										</div>
										<div className="tab-pane" id="messages" role="tabpanel">
											<div className="form-group">
												<label>Name [UA]</label>
												<label className="form-control">Name [UA]</label>
											</div>
											<div className="form-group">
												<label>Description [UA]</label>
												<label className="form-control">Description [UA]</label>
											</div>
											<div className="form-group">
												<label>Return [en]</label>
												<label className="form-control">Description [ua]</label>
											</div>
											<div className="form-group">
												<label>Care [en]</label>
												<label className="form-control">Description [ua]</label>
											</div>
										</div>
									</div>
								</div>
								<div className="detail col-sm-12">
									<div className="form-group">
										<label>Model</label>
										<label className="form-control">Model</label>
									</div>
									<div className="form-group">
										<label>Price </label>
										<label className="form-control">Price</label>
									</div>
									<div className="form-group">
										<label>Quantity </label>
										<label className="form-control">Quantity</label>
									</div>
									<div className="form-group">
										<label>Select main image</label>
										<label className="form-control">Select main image</label>
									</div>
									<div className="form-group">
										<label>Category </label>
										<label className="form-control">Category</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
