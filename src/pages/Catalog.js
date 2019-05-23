import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { database } from '../firebase'

class Catalog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: {}
		}
	}

	getProductsFromDatabase = () => {
		database.ref('/products').on('value', snapshot => {
			this.setState({
				products: snapshot.val()
			})
		})
	}

	componentWillMount = () => {
		this.getProductsFromDatabase()
	}

	toLowerCaseString = data => {
		return data.toLowerCase()
	}

	filteredAndReducedProducts = () => {
		const { match } = this.props

		if (this.state.products !== null) {
			let f = Object.keys(this.state.products)
			const filtered = Object.keys(f)
				.filter(item => item.active)
				.reduce((obj, key) => {
					return {
						...obj,
						[key]: this.state.products[key]
					}
				}, {})

			return filtered
		}
		return null
	}

	renderProducts = () => {
		let array = this.filteredAndReducedProducts()
		console.log(array)
		if (this.state.products !== null) {
			return Object.keys(array).map((item, index) => (
				<div className="col-lg-3 col-md-3 col-sm-6 col-12" key={item.id}>
					<div>
						{item.imagesNames[0]}
						<Link to={`/product/${this.toLowerCaseString(item.parentCategory)}/${item.category}/${this.toLowerCaseString(item.name.en)}`}>
							<img alt="" className="card-img" src={item.imagesUrls[0]} />
						</Link>
						<div className="caption">
							<div className="title">{item.name.en}</div>
							{/* <div className="price">${this.state.products[id].price}</div> */}
						</div>
					</div>
				</div>
			))
		}
	}

	render() {
		return (
			<div className="container-fluid catalog">
				<div className="container">
					<div className="row no-gutter">{this.renderProducts()}</div>
				</div>
			</div>
		)
	}
}
export default Catalog
