import React, { Component } from 'react'

class List extends Component {
	render() {
		return (
			<div className="userlist">
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
													<button type="button" className="btn btn-sm btn-primary btn-create">
														Create New
													</button>
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
														<th />
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>1</td>
														<td>John Doe</td>
														<td>johndoe@example.com</td>
														<td align="center">
															<button className="btn btn-default" />
															<button className="btn btn-danger" />
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default List
