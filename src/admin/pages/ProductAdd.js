import React, { Component } from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default class ProductAdd extends Component {
	render() {
		return (
			<div>
				<Header />
				<Navbar />
				<div className="app-content content">
					<div className="content-wrapper">
						<div className="content-body">
							<div className="row">
								<div className="page-header">title</div>
								<div className="container-fluid">
									<div className="panel-body">
										<form method="post" className="form-horizontal">
											<div className="tab-content">
												<div className="form-group">
													<label className="col-sm-2 control-label">Расположение</label>
													<div className="col-sm-10">
														<input type="text" name="location" placeholder="Расположение" className="form-control" />
													</div>
												</div>

												<div className="form-group">
													<label className="col-sm-2 control-label">Цена</label>
													<div className="col-sm-10">
														<input type="text" name="price" placeholder="Цена" className="form-control" />
													</div>
												</div>

												<div className="form-group">
													<label className="col-sm-2 control-label">Количество</label>
													<div className="col-sm-10">
														<input type="text" name="quantity" placeholder="Количество" className="form-control" />
													</div>
												</div>
											</div>
											<div className=" text-right">
												<button type="button" className="btn btn-sm btn-primary btn-create">
													Create New
												</button>
											</div>
										</form>
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
