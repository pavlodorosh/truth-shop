import React, { Component } from 'react'
import AddProduct from '../components/Product/AddProduct'
import EditProduct from '../components/Product/EditProduct'
class ProductList extends Component {
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
														<th>
															<em className="fa fa-cog" />
														</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>T-short</td>
														<td>123</td>
														<td>100$</td>
														<td>999</td>
														<td>on</td>
														<td align="center">
															<button className="btn btn-default" data-toggle="modal" data-target="#EditProduct">
																<em className="fa fa-pencil" />
															</button>
															<button className="btn btn-danger">
																<em className="fa fa-trash" />
															</button>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<AddProduct />
				<EditProduct />
			</div>
		)
	}
}

export default ProductList
