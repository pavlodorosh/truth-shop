import React, { Component } from 'react'

export default class ProductAttribute extends Component {
	state = {
		price: 0,
		quantity: 0,
		sale: '',
		size: ''
	}

	handleChange = event => {
		this.setState(
			{
				[event.target.name]: event.target.value
			},
			() => {
				this.props.updateAttr(this.props.index, this.props.id, this.state.price, this.state.quantity, this.state.sale, this.state.size)
			}
		)
	}

	render() {
		const { id, groups, index } = this.props

		return (
			<div className="product_attributes_add">
				<div className="form-group">
					<input className="form-control" value={groups[index].attributes[id].price} onChange={this.handleChange} name="price" />
				</div>
				<div className="form-group">
					<input className="form-control" value={groups[index].attributes[id].quantity} onChange={this.handleChange} name="quantity" />
				</div>
				<div className="form-group">
					<input className="form-control" value={groups[index].attributes[id].sale} onChange={this.handleChange} name="sale" />
				</div>
				<div className="form-group">
					<input className="form-control" value={groups[index].attributes[id].size} onChange={this.handleChange} name="size" />
				</div>
			</div>
		)
	}
}
