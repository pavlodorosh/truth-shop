import React, { Component } from 'react'
import { Textbox } from 'react-inputs-validation'

export default class ProductAttribute extends Component {
	render() {
		return (
			<div className="product_attributes_add">
				<div className="form-group">
					<label>Price</label>
					<Textbox />
				</div>
				<div className="form-group">
					<label>Quantity </label>
					<Textbox />
				</div>
				<div className="form-group">
					<label>Sale</label>
					<Textbox />
				</div>
				<div className="form-group">
					<label>Size</label>
					<Textbox />
				</div>
			</div>
		)
	}
}
