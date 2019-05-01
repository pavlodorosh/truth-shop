import React, { Component } from 'react'
import { Modal } from 'bootstrap-4-react'
import { storage, database } from '../../firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
import { Line } from 'rc-progress'
import { Link } from 'react-router-dom'
import uuid from 'uuid/v1'
import { Textbox } from 'react-inputs-validation'
import 'react-inputs-validation/lib/react-inputs-validation.min.css'

class AddUser extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		roles: ''
	}

	saveUser = () => {
		return this.state.brendsRef.child(this.state.name + '-' + uuid()).set({
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			roles: this.state.roles
		})
	}

	toggleValidating(validate) {
		this.setState({ validate })
	}

	validateForms = e => {
		//e.preventDefault()
		this.toggleValidating(true)
		if (!this.state.error_name && this.state.previewUrl.length) {
			this.saveUser()
		}
	}

	render() {
		return (
			<>
				<div className="col-md-9">
					<div className="row">
						<div className="content-body">
							<div className="panel-heading">
								<div className="col-12">
									<div className="row">
										<h3 className="panel-title">Add new brends</h3>
									</div>
								</div>
							</div>
							<div className="panel-body">
								<div className="detail col-sm-12">
									<div className="form-group">
										<label className="col-lg-6 p-0">Name</label>
										<Textbox
											type="text"
											className="form-control col-lg-6 p-0"
											name="name"
											onChange={(val, e) => {
												this.setState({ [e.target.name]: val })
											}}
											onBlur={() => {}}
											validationOption={{
												name: 'Name',
												check: true,
												required: true,
												showMsg: true
											}}
											validationCallback={res => {
												this.setState({
													error_name: res,
													validate: false
												})
											}}
											value={this.state.name}
											validate={this.state.validate}
										/>
									</div>
									<div className="form-group">
										<label className="col-lg-6 p-0">Email</label>
										<Textbox
											type="text"
											className="form-control col-lg-6 p-0"
											name="email"
											onChange={(val, e) => {
												this.setState({ [e.target.name]: val })
											}}
											onBlur={() => {}}
											validationOption={{
												name: 'Email',
												check: true,
												required: true,
												showMsg: true
											}}
											validationCallback={res => {
												this.setState({
													error_name: res,
													validate: false
												})
											}}
											value={this.state.name}
											validate={this.state.validate}
										/>
									</div>
								</div>

								<button>
									<Link to="/user/users"> Back</Link>
								</button>
								<button
									primary="true"
									onClick={() => {
										this.validateForms()
									}}>
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}

export default AddUser
