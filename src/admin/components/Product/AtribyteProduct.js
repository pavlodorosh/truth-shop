import React, { Component } from 'react'
import SizeProduct from './SizeProduct'
import QuantityProduct from './QuantityProduct'
import PriceProduct from './PriceProduct'
import SaleProduct from './SaleProduct'

export default class AtribyteProduct extends Component {
	render() {
		return (
			<div>
				<div className="form-group">
					<label>Atribyte </label>
					<div className="atr">
						<SizeProduct />
						<QuantityProduct />
						<PriceProduct />
						<SaleProduct />
					</div>
					<button onClick="">add..</button>
				</div>
			</div>
		)
	}
}
