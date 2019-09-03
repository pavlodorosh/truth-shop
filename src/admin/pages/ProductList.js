import React, { Component } from 'react'
import { database, storage } from '../../firebase'
import { Link } from 'react-router-dom'
import Switch from 'react-flexible-switch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import noImage from '../../assets/img/no-image-icon-4.png'

class ProductList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: {}
		}
		this.removeProductFromDatabase = this.removeProductFromDatabase.bind(this)
	}

	removeProductFromDatabase = id => {
		database
			.ref('/products')
			.child(id)
			.remove()
		this.removeMainProductImageFromStorage(id)
	}

	removeMainProductImageFromStorage = id => {
		this.state.products.length &&
			this.state.products[id].groups.map(item => {
				item.imagesNames.map(image => {
					storage
						.ref('images/products/' + id)
						.child(image)
						.delete()
						.then(() => {
							console.log('images deleted')
						})
						.catch(err => {
							console.log(err)
						})
				})
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

	onChangeActive = (id, value) => {
		return database
			.ref('/products')
			.child(id)
			.update({
				active: !value
			})
	}

	updateDatabase = () => {}

	renderProducts = () => {
		if (this.state.products) {
			return Object.keys(this.state.products).map(id => (
				<tr key={id}>
					<td>{this.state.products[id].name.en}</td>
					<td>
						<img style={{ width: '50px' }} src={this.state.products[id].groups[0].imagesUrls ? this.state.products[id].groups[0].imagesUrls[0] : noImage} alt="" />
					</td>
					<td>
						{this.state.products[id].parentCategory + ' > '} {this.state.products[id].category}
					</td>
					<td>{this.state.products[id].model}</td>
					<td>
						<Switch
							value={this.state.products[id].active}
							onChange={() => {
								this.onChangeActive(id, this.state.products[id].active)
							}}
						/>
					</td>
					<td align="center">
						<Link style={{ backgroundColor: '#dddddd' }} className="btn btn-default" to={{ pathname: `/user/edit/product/${id}`, state: { product: this.state.products[id] } }}>
							<FontAwesomeIcon icon="edit" />
						</Link>
						<button className="btn btn-danger" onClick={() => this.removeProductFromDatabase(id)}>
							<FontAwesomeIcon icon="trash-alt" />
						</button>
					</td>
				</tr>
			))
		}
	}

	render() {
		return (
			<div className="col-md-9">
				<div className="row">
					<div className="content-body">
						<div className="panel-heading">
							<div className="col-6">
								<div className="row">
									<h3 className="panel-title">Product List</h3>
								</div>
							</div>
							<div className="col-6 ">
								<div className="row">
									<Link type="button" to="/admin/add/product">
										<FontAwesomeIcon icon="plus" />
									</Link>
								</div>
							</div>
						</div>
						<div className="panel-body">
							<table className="table table-striped table-bordered table-list">
								<thead>
									<tr>
										<th>Name</th>
										<th>img</th>
										<th>Category</th>
										<th>model</th>
										{/* <th>price</th> */}
										{/* <th>quantity</th> */}
										<th>status</th>
										<th>Edit / Delete</th>
									</tr>
								</thead>
								<tbody>{this.renderProducts()}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ProductList
