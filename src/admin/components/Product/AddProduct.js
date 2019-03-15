import React, { Component } from 'react'
import { Modal, Button } from 'bootstrap-4-react'

export default class AddProduct extends Component {
	render() {
		return (
			<div>
				<Modal id="AddProduct" fade>
					<Modal.Dialog>
						<Modal.Content>
							<Modal.Header>
								<Modal.Title>Add new subcategory</Modal.Title>
								<Modal.Close>
									<span aria-hidden="true">&times;</span>
								</Modal.Close>
							</Modal.Header>
							<Modal.Body>
								<form className="add-category-form">
									<ul className="nav nav-tabs" role="tablist">
										<li className="nav-item">
											<span className="nav-link active" data-toggle="tab" href="#home" role="tab">
												DETAILS
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#profile" role="tab">
												CARE
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#messages" role="tab">
												RETURN
											</span>
										</li>
									</ul>

									<div className="tab-content">
										<div className="tab-pane active" id="home" role="tabpanel">
											<div className="form-group">
												<label>Name [en]</label>
											</div>
										</div>
										<div className="tab-pane" id="profile" role="tabpanel">
											<div className="form-group">
												<label>Name [ru]</label>
											</div>
										</div>
										<div className="tab-pane" id="messages" role="tabpanel">
											<div className="form-group">
												<label>Link</label>
											</div>
											<div className="form-group">
												<label>Select preview image</label>
											</div>
											<div className="form-group">
												<label>Select category</label>
											</div>
										</div>
									</div>

									<button data-dismiss="modal">Close</button>
									<button type="submit" primary="true">
										Save
									</button>
								</form>
							</Modal.Body>
						</Modal.Content>
					</Modal.Dialog>
				</Modal>
			</div>
		)
	}
}
