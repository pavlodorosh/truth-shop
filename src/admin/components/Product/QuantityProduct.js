import React, { Component } from 'react'
import { database } from '../../../firebase'

export default class QuantityProduct extends Component {
	render() {
		return (
			<div>
				<div className="form-group">
					<label>Quantity </label>
					<input className="form-control" value="" name="quantity" onChange="" />
				</div>
			</div>
		)
	}
}
