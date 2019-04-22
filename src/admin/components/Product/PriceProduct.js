import React, { Component } from 'react'
import { database } from '../../../firebase'
import { Textbox } from 'react-inputs-validation'

export default class PriceProduct extends Component {
	render() {
		return (
			<div>
				<div className="form-group">
					<label>Price </label>
					<Textbox />
				</div>
			</div>
		)
	}
}
