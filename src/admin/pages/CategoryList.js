import React, { Component } from 'react'
import { database } from '../../firebase'
import { connect } from 'react-redux'
import { getCategoriesThunk } from '../../redux/actions'

import Navbar from '../components/Navbar/Navbar'
import AddCategory from '../components/Categories/AddCategory'

class CategoryList extends Component {
	componentWillMount() {
		this.props.getCategoriesThunk(database)
	}

	componentWillUpdate() {
		this.props.getCategoriesThunk(database)
	}

	render() {
		const { categories } = this.props

		return (
			<div className="user">
				<Navbar />

				<div className="app-content content">
					<div className="content-wrapper">
						<div className="content-body">
							<div className="row">
								<div className="col-md-12 ">
									<div className="panel panel-default panel-table">
										<div className="panel-heading">
											<div className="row">
												<div className="col col-xs-6">
													<h3 className="panel-title">Panel Heading</h3>
												</div>
												<div className="col col-xs-6 text-right">
													<button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-sm btn-primary btn-create">
														Create New
													</button>
												</div>
											</div>
										</div>
										<div className="panel-body">
											<table className="table table-striped table-bordered table-list">
												<thead>
													<tr>
														<th>Name</th>
														<th>
															<em className="fa fa-cog" />
														</th>
													</tr>
												</thead>
												<tbody>
													{categories !== null &&
														categories.accessories &&
														Object.keys(categories.accessories).map(function(id) {
															return (
																<tr key={id}>
																	<td>Accessories -> {categories.accessories[id].name.en}</td>
																	<td align="center">
																		<button className="btn btn-default">
																			<em className="fa fa-pencil" />
																		</button>
																		<button className="btn btn-danger">
																			<em className="fa fa-trash" />
																		</button>
																	</td>
																</tr>
															)
														})}

													{categories !== null &&
														categories.men &&
														Object.keys(categories.men).map(function(id) {
															return (
																<tr key={id}>
																	<td>Men -> {categories.men[id].name.en}</td>
																	<td align="center">
																		<button className="btn btn-default">
																			<em className="fa fa-pencil" />
																		</button>
																		<button className="btn btn-danger">
																			<em className="fa fa-trash" />
																		</button>
																	</td>
																</tr>
															)
														})}

													{categories !== null &&
														categories.women &&
														Object.keys(categories.women).map(function(id) {
															return (
																<tr key={id}>
																	<td>Women -> {categories.women[id].name.en}</td>
																	<td align="center">
																		<button className="btn btn-default">
																			<em className="fa fa-pencil" />
																		</button>
																		<button className="btn btn-danger">
																			<em className="fa fa-trash" />
																		</button>
																	</td>
																</tr>
															)
														})}

													{/* <tr key={key}>
														<td>Accessories -> {accessoriesArray[key].name.en}</td>
														<td align="center">
															<button className="btn btn-default">
																<em className="fa fa-pencil" />
															</button>
															<button className="btn btn-danger">
																<em className="fa fa-trash" />
															</button>
														</td>
													</tr> */}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Modal */}
				<AddCategory />
			</div>
		)
	}
	static mapStateToProps = state => ({
		categories: state.getCategories
	})

	static mapStateToDispatch = dispatch => {
		return {
			getCategoriesThunk: db => dispatch(getCategoriesThunk(db))
		}
	}
}

export default connect(
	CategoryList.mapStateToProps,
	CategoryList.mapStateToDispatch
)(CategoryList)
