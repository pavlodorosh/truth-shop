import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default class CategoryList extends Component {
	render() {
		return (
			<div className="user">
				<Header />
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
														<th>Name</th>
														<th>Sort</th>
														<th>
															<em className="fa fa-cog" />
														</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>T-short</td>
														<td>1</td>
														<td align="center">
															<button className="btn btn-default">
																<em className="fa fa-pencil" />
															</button>
															<button className="btn btn-danger">
																<em className="fa fa-trash" />
															</button>
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
				<Footer />
			</div>
		)
	}
}
