import React, { Component } from 'react'
import { database } from '../../../firebase'

export default class SaleProduct extends Component {
	render() {
		return (
			<div>
				<div className="form-group">
					<label>Sale</label>
					<Textbox />
				</div>
			</div>
		)
	}
}
