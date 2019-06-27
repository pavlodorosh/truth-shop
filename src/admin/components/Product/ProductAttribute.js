import React, { Component } from 'react'
import { database } from '../../../firebase'
import { Select } from 'react-inputs-validation'

export default class ProductAttribute extends Component {
	state = {
		price: 0,
		quantity: 0,
		sale: '',
		size: '',
		select_size: ''
	}

	componentDidMount = () => {
		this.getListSizes()
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

	deleteAttributes = (index, id) => {
		this.props.removeMe(this.props.index, this.props.id)
	}

	getListSizes = () => {
		database.ref('/sizes').on('value', snapshot => {
			this.setState({
				sizes: snapshot.val()
			})
			if (snapshot.val() !== undefined && snapshot.val() !== null) {
				this.pushSizesToSelect(snapshot.val())
			}
		})
	}

	pushSizesToSelect = data => {
		let size_list = []

		Object.keys(data).map((id, index) => {
			let size = {
				id: index,
				name: data[id].name
			}
			size_list.push(size)
		})

		this.setState(() => ({
			size_list: size_list
		}))
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
					<Select
						classNameSelect="ama_input_select"
						classNameContainer="ama_input_container"
						classNameWrapper="ama_input_wrapper"
						name="size"
						optionList={this.state.size_list}
						onChange={(size, e) => {
							let sizeName = this.state.size_list[size].name
							this.setState({ size: sizeName }, () => {
								this.props.updateAttr(this.props.index, this.props.id, this.state.price, this.state.quantity, this.state.sale, this.state.size)
							})
						}}
						onBlur={() => {}}
						value={this.state.size}
						selectHtml={`${this.state.size}`}
					/>
				</div>
				{groups[index].attributes.length > 1 && <button onClick={this.deleteAttributes}>remove..</button>}
			</div>
		)
	}
}
