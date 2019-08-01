import React, { Component } from 'react'
import { database } from '../../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class BrendsList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sizes: {}
		}
		this.removeSizeFromDatabase = this.removeSizeFromDatabase.bind(this)
	}

	removeSizeFromDatabase = id => {
		database
			.ref('/sizes')
			.child(id)
			.remove()
	}

	getSizesFromDatabase = () => {
		database.ref('/sizes').on('value', snapshot => {
			this.setState({
				sizes: snapshot.val()
			})
		})
	}

	componentWillMount = () => {
		this.getSizesFromDatabase()
	}

	renderSizes = () => {
		if (this.state.sizes !== null) {
			return Object.keys(this.state.sizes).map((id, index) => (
				<tr key={id}>
					<td>{this.state.sizes[id].name}</td>

					<td align="center">
						<Link style={{ backgroundColor: '#dddddd' }} className="btn btn-default" to={{ pathname: `/user/edit/brend/${id}`, state: { size: this.state.sizes[id] } }}>
							<FontAwesomeIcon icon="edit" />
						</Link>
						<button className="btn btn-danger" onClick={() => this.removeSizeFromDatabase(id)}>
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
									<h3 className="panel-title">Sizes List</h3>
								</div>
							</div>
							<div className="col-6 ">
								<div className="row">
									<Link type="button" to="/user/add/size">
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
								<tbody>{this.renderSizes()}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default BrendsList
