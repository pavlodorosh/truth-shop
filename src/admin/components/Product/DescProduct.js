import React, { Component } from 'react'
import { database } from '../../../firebase'
import { Textbox } from 'react-inputs-validation'

export default class DescProduct extends Component {
	render() {
		return (
			<div>
				<div className="desc_product">
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
									<label>Description [en]</label>
									<Textbox />
								</div>
							</div>
							<div className="tab-pane" id="profile" role="tabpanel">
								<div className="form-group">
									<label>Description [RU]</label>
									<Textbox />
								</div>
							</div>
							<div className="tab-pane" id="messages" role="tabpanel">
								<div className="form-group">
									<label>Description [UA]</label>
									<Textbox />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
