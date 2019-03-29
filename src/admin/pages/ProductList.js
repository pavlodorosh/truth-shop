import React, { Component } from 'react'
import { database, storage } from '../../firebase'
import { Link } from 'react-router-dom'

import AddProduct from '../components/Product/AddProduct'
class ProductList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: {}
		}
		this.removeProductFromDatabase = this.removeProductFromDatabase.bind(this)
	}

	removeProductFromDatabase = (id, preview) => {
		database
			.ref('/products')
			.child(id)
			.remove()
		this.removeMainProductImageFromStorage(preview)
	}

	removeMainProductImageFromStorage = preview => {
		console.log('images/' + preview)

		storage
			.ref('images/')
			.child(preview)
			.delete()
			.then(() => {
				console.log('preview deleted')
			})
			.catch(err => {
				console.log(err)
			})
	}

	getProductsFromDatabase = () => {
		database.ref('/products').on('value', snapshot => {
			this.setState({
				products: snapshot.val()
			})
		})
	}

	componentWillMount = () => {
		this.getProductsFromDatabase()
	}

	renderProducts = () => {
		if (this.state.products !== null) {
			return Object.keys(this.state.products).map((id, index) => (
				<tr key={id}>
					<td>
						<img style={{ width: '50px' }} src={this.state.products[id].mainImageUrl} alt="" />
					</td>
					<td>{this.state.products[id].name.en}</td>
					<td>{this.state.products[id].model}</td>
					<td>{this.state.products[id].price} $</td>
					<td>{this.state.products[id].quantity}</td>
					<td>status</td>
					<td align="center">
						{/* <Link style={{ backgroundColor: '#dddddd' }} className="btn btn-default" to={`/user/edit/product/${id}`}>
							<em className="fa fa-pencil" />
						</Link> */}
						<button className="btn btn-danger" onClick={() => this.removeProductFromDatabase(id, this.state.products[id].mainImageName)}>
							<em className="fa fa-trash" />
						</button>
					</td>
				</tr>
			))
		}
	}

	render() {
		return (
			<div className="ProductList">
				<div className="app-content content">
					<div className="content-wrapper">
						<div className="content-body">
							<div className="row">
								<div className="col-md-12 ">
									<div className="panel panel-default panel-table">
										<div className="panel-heading">
											<div className="row">
												<div className="col col-xs-6">
													<h3 className="panel-title">Product List</h3>
												</div>
												<div className="col col-xs-6 text-right">
													<button type="button" className="btn btn-sm btn-primary btn-create" data-toggle="modal" data-target="#productModal">
														Create New
													</button>
												</div>
											</div>
										</div>
										<div className="panel-body">
											<table className="table table-striped table-bordered table-list">
												<thead>
													<tr>
														<th>img</th>
														<th>Name</th>
														<th>model</th>
														<th>price</th>
														<th>quantity</th>
														<th>status</th>
														<th />
													</tr>
												</thead>
												<tbody>{this.renderProducts()}</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<AddProduct />
			</div>
		)
	}
}

export default ProductList
