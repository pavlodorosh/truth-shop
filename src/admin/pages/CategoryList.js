import React, { Component } from 'react'
import { database, storage } from '../../firebase'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
			.ref('images/categories')
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

	renderCategories = () => {
		if (this.state.categories !== null) {
			return Object.keys(this.state.categories).map((id, index) => (
				<tr key={id}>
					<td>
						{this.state.categories[id].parentCategory} -> {this.state.categories[id].name.en}
					</td>
					<td align="center">
						{/* <button className="btn btn-default" data-toggle="modal" data-target="#EditCategory">
							<FontAwesomeIcon icon="edit" />
						</button> */}
						<Link style={{ backgroundColor: '#dddddd' }} className="btn btn-default" to={{ pathname: `/user/edit/category/${id}`, state: { category: this.state.categories[id] } }}>
							<FontAwesomeIcon icon="edit" />
						</Link>
						<button className="btn btn-danger" onClick={() => this.removeCategoryFromDatabase(id, this.state.categories[id].previewName)}>
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
									<h3 className="panel-title">Category List</h3>
								</div>
							</div>
							<div className="col-6 ">
								<div className="row">
									<Link type="button" to="/user/add/category">
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
										{/* <th>price</th> */}
										{/* <th>quantity</th> */}
										<th>Edit / Delete</th>
									</tr>
								</thead>
								<tbody>{this.renderCategories()}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CategoryList
