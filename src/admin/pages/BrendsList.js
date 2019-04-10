import React, { Component } from 'react'
import { database, storage } from '../../firebase'

import Navbar from '../components/Navbar/Navbar'

import AddBrend from '../components/Brends/AddBrend'
// import EditBrend from '../components/Brends/Editbrend'

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
						<button className="btn btn-danger" onClick={() => this.removeBrendsFromDatabase(id, this.state.brends[id].previewName)}>
							<em className="fa fa-trash" />
						</button>
					</td>
				</tr>
			))
		}
	}

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
													<h3 className="panel-title">Brends List</h3>
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
														<th />
													</tr>
												</thead>
												<tbody>{this.renderBrends()}</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<AddBrend />
				{/* <EditBrend /> */}
			</div>
		)
	}
}

export default BrendsList
