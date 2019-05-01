import React, { Component } from 'react'
import { database, storage } from '../../firebase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

class UserList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: {}
		}
		this.removeUsersFromDatabase = this.removeUsersFromDatabase.bind(this)
	}

	removeUsersFromDatabase = (id, preview) => {
		database
			.ref('/users')
			.child(id)
			.remove()
	}

	getUsersFromDatabase = () => {
		database.ref('/users').on('value', snapshot => {
			this.setState({
				users: snapshot.val()
			})
		})
	}

	componentWillMount = () => {
		this.getUsersFromDatabase()
	}
	renderUsers = () => {
		if (this.state.users !== null) {
			return Object.keys(this.state.users).map((id, index) => (
				<tr key={id}>
					<td>{this.state.users[id].id}</td>
					<td>{this.state.users[id].name}</td>
					<td>{this.state.users[id].email}</td>

					<td align="center">
						<Link style={{ backgroundColor: '#dddddd' }} className="btn btn-default" to={{ pathname: `/user/edit/user/${id}`, state: { users: this.state.user[id] } }}>
							<FontAwesomeIcon icon="edit" />
						</Link>
						<button className="btn btn-danger" onClick={() => this.removeUsersFromDatabase(id, this.state.users[id].previewName)}>
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
									<h3 className="panel-title">Users List</h3>
								</div>
							</div>
							<div className="col-6 ">
								<div className="row">
									<Link type="button" to="/user/add/user">
										<FontAwesomeIcon icon="plus" />
									</Link>
								</div>
							</div>
						</div>
						<div className="panel-body">
							<table className="table table-striped table-bordered table-list">
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Email</th>
										<th>Edit / Delete</th>
									</tr>
								</thead>
								<tbody>{this.renderUsers()}</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default UserList
