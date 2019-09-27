import React, { useContext, useState, useEffect } from 'react'
import { adminData } from './Admin';
import { database, storage } from '../../firebase'
import { Link } from 'react-router-dom'
import Switch from 'react-flexible-switch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import noImage from '../../assets/img/no-image-icon-4.png'

const ProductList = () => {

	const data = useContext(adminData)
	const [products, getProducts] = useState([])

	useEffect(()=>{
		database.ref('/products').on('value', snapshot => {
			let dbProd = snapshot.val()
			let newProd = Object.keys(dbProd).map((id) => {
				let newObj = {
					id: id,
					name: dbProd[id].name.en,
					category: dbProd[id].parentCategory + '-->' + dbProd[id].category.en,
					model: dbProd[id].model,
					status: dbProd[id].active
				}
				return newObj
			})
			getProducts(newProd)
		})	
	})

	const removeProductFromDatabase = id => {
		database
			.ref('/products')
			.child(id)
			.remove()
		this.removeMainProductImageFromStorage(id)
	}

	const removeMainProductImageFromStorage = id => {
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
								<Link to="/admin/add/product">
									<button type="button">
										<FontAwesomeIcon icon="plus" />
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="panel-body">
						<table className="table table-striped table-bordered table-list">
							<thead>
								<tr>
									<th>Name</th>
									<th>Category</th>
									<th>model</th>
									{/* <th>price</th> */}
									{/* <th>quantity</th> */}
									<th>status</th>
									<th>Edit / Delete</th>
								</tr>
							</thead>
							<tbody>
							{
								console.log(products)}{
								products.map((item, id) => (
										<tr>
											<td>{item.name}</td>
											<td>{item.category}</td>
											<td>{item.model && item.model}</td>
											<td>{item.active ? 'Active' : 'Not Active'}</td>
											<td>
												<button>Edit</button>
												<button>Delete</button>
											</td>
										</tr>
									)
								)	
							}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductList
