import React, { Component } from 'react'
import { database, storage } from '../../firebase'

import Navbar from '../components/Navbar/Navbar'
import AddCategory from '../components/Categories/AddCategory'
import EditCategory from '../components/Categories/EditCategory'

class CategoryList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: {}
		}
		this.removeCategoryFromDatabase = this.removeCategoryFromDatabase.bind(this)
	}

	removeCategoryFromDatabase = (id, preview) => {
		database
			.ref('/categories')
			.child(id)
			.remove()
		this.removePreviewImageFromStorage(preview)
	}

	removePreviewImageFromStorage = preview => {
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

	getCategoriesFromDatabase = () => {
		database.ref('/categories').on('value', snapshot => {
			this.setState({
				categories: snapshot.val()
			})
		})
	}

	componentWillMount = () => {
		this.getCategoriesFromDatabase()
	}

	// renderCategories = () => {
	// 	if (this.state.categories !== null) {
	// 		return Object.keys(this.state.categories).map((id, index) => (
	// 			<tr key={id}>
	// 				<td>
	// 					{this.state.categories[id].parentCategory} -> {this.state.categories[id].name.en}
	// 				</td>
	// 				<td align="center">
	// 					<button className="btn btn-default" data-toggle="modal" data-target="#EditCategory">
	// 						<em className="fa fa-pencil" />
	// 					</button>
	// 					<button className="btn btn-danger" onClick={() => this.removeCategoryFromDatabase(id, this.state.categories[id].previewName)}>
	// 						<em className="fa fa-trash" />
	// 					</button>
	// 				</td>
	// 			</tr>
	// 		))
	// 	}
	// }

	render() {
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
													<h3 className="panel-title">Category List</h3>
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
												{/* <tbody>{this.renderCategories()}</tbody> */}
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<AddCategory />
				<EditCategory />
			</div>
		)
	}
}

export default CategoryList
