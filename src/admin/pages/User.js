import React, { Component } from 'react'

export default class User extends Component {
	render() {
		return (
			<div className="col-md-9">
				<div className="row">
					<div className="content-body">
						<div className="panel-heading">
							<div className="col-12">
								<div className="row">
									<h3 className="panel-title">Profile</h3>
								</div>
							</div>
						</div>
						<div className="panel-body">
							<div className="card-body">
								<form>
									<div className="row">
										<div className="col-md-5 pr-md-1">
											<div className="form-group">
												<label>Company </label>
												<label className="form-control">Company</label>
											</div>
										</div>
										<div className="col-md-3 px-md-1">
											<div className="form-group">
												<label>Username</label>
												<label className="form-control">Username</label>
											</div>
										</div>
										<div className="col-md-4 pl-md-1">
											<div className="form-group">
												<label>Email address</label>
												<label className="form-control">mike@email.com</label>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-6 pr-md-1">
											<div className="form-group">
												<label>First Name</label>
												<label className="form-control">Company</label>
											</div>
										</div>
										<div className="col-md-6 pl-md-1">
											<div className="form-group">
												<label>Last Name</label>
												<label className="form-control">Last Name</label>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<div className="form-group">
												<label>Address</label>
												<label className="form-control">Home Address</label>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-4 pr-md-1">
											<div className="form-group">
												<label>City</label>
												<label className="form-control">City</label>
											</div>
										</div>
										<div className="col-md-4 px-md-1">
											<div className="form-group">
												<label>Country</label>
												<label className="form-control">Country</label>
											</div>
										</div>
										<div className="col-md-4 pl-md-1">
											<div className="form-group">
												<label>Postal Code</label>
												<label className="form-control">ZIP Code</label>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-8">
											<div className="form-group">
												<label>About Me</label>
												<label className="form-control">Here can be your description</label>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
