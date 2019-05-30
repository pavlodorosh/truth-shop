import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { database } from '../firebase'
import Filter from '../components/Filter'

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
			console.log(f)
			const filtered = Object.keys(f)
			// .filter(item => match.params.parentcat === item.parentCategory && match.params.cat === item.category)
			// .reduce((obj, key) => {
			// 	return {
			// 		...obj,
			// 		[key]: this.state.products[key]
			// 	}
			// }, {})

			return filtered
		}
		return null
	}

	renderProducts = () => {
		const { match } = this.props
		let array = this.filteredAndReducedProducts()
		console.log(array)
		if (this.state.products.length) {
			return Object.keys(array).map((item, index) => (
				<div className="col-lg-3 col-md-3 col-sm-6 col-12" key={item.id}>
					<div>
						tfthgf
						<Link to={`/product/${match.params.parentcat}/${match.params.cat}/${item.name.en.toLowerCase()}`}>
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
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-6 col-12">
							<Filter />
						</div>
						<div className="col-lg-9 col-md-9 col-sm-6 col-12">{this.renderProducts()}</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Catalog
