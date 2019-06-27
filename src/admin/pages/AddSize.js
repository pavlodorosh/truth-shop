import React, { Component } from 'react'
import { database } from '../../firebase'
import { Link } from 'react-router-dom'
import { Textbox } from 'react-inputs-validation'
import 'react-inputs-validation/lib/react-inputs-validation.min.css'

class AddSize extends Component {
	state = {
		name: '',
		sizeRef: database.ref('sizes')
	}

	saveSize = () => {
		return this.state.sizeRef
			.child(this.state.name)
			.set({
				name: this.state.name
			})
			.then(() => {
				window.location.href = '/user/sizes'
			})
			.catch(err => {
				console.log(err)
			})
	}

	validateForms = e => {
		//e.preventDefault()
		if (this.state.name.length) {
			this.saveSize()
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
										<h3 className="panel-title">Add new size</h3>
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
											value={this.state.name}
										/>
									</div>
								</div>
								<button>
									<Link to="/user/sizes"> Back</Link>
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

export default AddSize
