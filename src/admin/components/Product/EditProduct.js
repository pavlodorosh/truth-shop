import React, { Component } from 'react'
import { Container, Row, Col, Button, Media, BImg, Modal } from 'bootstrap-4-react'
export default class EditProduct extends Component {
	render() {
		return (
			<div>
				<div className="app-content">
					<div className="content-wrapper">
						<div className="content-body">
							<div className="row">
								<div className="product_description col-sm-12">
									<ul className="nav nav-tabs" role="tablist">
										<li className="nav-item">
											<span className="nav-link active" data-toggle="tab" href="#home" role="tab">
												EN
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#profile" role="tab">
												RU
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#messages" role="tab">
												UA
											</span>
										</li>
									</ul>

									<div className="tab-content">
										<div className="tab-pane active" id="home" role="tabpanel">
											<div className="form-group">
												<label>Name [en]</label>
												<label class="form-control">Name [en]</label>
											</div>
											<div className="form-group">
												<label>Description [en]</label>
												<label class="form-control">Description [en]</label>
											</div>
										</div>
										<div className="tab-pane" id="profile" role="tabpanel">
											<div className="form-group">
												<label>Name [RU]</label>
												<label class="form-control">Name [RU]</label>
											</div>
											<div className="form-group">
												<label>Description [RU]</label>
												<label class="form-control">Description [RU]</label>
											</div>
										</div>
										<div className="tab-pane" id="messages" role="tabpanel">
											<div className="form-group">
												<label>Name [UA]</label>
												<label class="form-control">Name [UA]</label>
											</div>
											<div className="form-group">
												<label>Description [UA]</label>
												<label class="form-control">Description [UA]</label>
											</div>
										</div>
									</div>
								</div>
								<div className="detail col-sm-12">
									<div className="form-group">
										<label>Model</label>
										<label class="form-control">Model</label>
									</div>
									<div className="form-group">
										<label>Price </label>
										<label class="form-control">Price</label>
									</div>
									<div className="form-group">
										<label>Select main image</label>
										<label class="form-control">Select main image</label>
									</div>
									<div className="form-group">
										<label>Category </label>
										<label class="form-control">Category</label>
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
