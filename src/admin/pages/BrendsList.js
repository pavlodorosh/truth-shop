import React, { Component } from 'react'
import { database, storage } from '../../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
//import AddBrend from '../components/Brends/AddBrend'
//import EditBrend from '../components/Brends/Editbrend'

class BrendsList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			brends: {}
		}
		this.removeBrendsFromDatabase = this.removeBrendsFromDatabase.bind(this)
	}

	removeBrendsFromDatabase = (id, preview) => {
		database
			.ref('/brends')
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

	getBrendsFromDatabase = () => {
		database.ref('/brends').on('value', snapshot => {
			this.setState({
				brends: snapshot.val()
			})
		})
	}

	componentWillMount = () => {
		this.getBrendsFromDatabase()
	}

	renderBrends = () => {
		if (this.state.brends !== null) {
			return Object.keys(this.state.brends).map((id, index) => (
				<tr key={id}>
					<td>{this.state.brends[id].name}</td>

					<td align="center">
						{/* <button className="btn btn-default" data-toggle="modal" data-target="#EditCategory">
							<em className="fa fa-pencil" />
                        </button> */}
						{/* <button className="btn btn-danger" onClick={() => this.removeBrendsFromDatabase(id, this.state.brends[id].previewName)}>
							<em className="fa fa-trash" />
						</button> */}
						<Link style={{ backgroundColor: '#dddddd' }} className="btn btn-default" to={{ pathname: `/user/edit/brend/${id}`, state: { brend: this.state.brends[id] } }}>
							<FontAwesomeIcon icon="edit" />
						</Link>
						<button className="btn btn-danger" onClick={() => this.removeBrendsFromDatabase(id, this.state.brends[id].previewName)}>
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
									<h3 className="panel-title">Brends List</h3>
								</div>
							</div>
							<div className="col-6 ">
								<div className="row">
									<Link type="button" to="/user/add/brend">
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
										<th>Edit / Delete</th>
									</tr>
								</thead>
								<tbody>{this.renderBrends()}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BrendsList
