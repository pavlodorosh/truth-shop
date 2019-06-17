import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { database } from '../firebase'
import Filter from '../components/Filter'

class Catalog extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: {},
			colors: [],
			brands: [],
			sizes: [],
			priceValue: {
				min: 0,
				max: 100
			},
			priceRange: {
				min: 0,
				max: 100
			},
			filterGender: '',
			filterColor: [],
			filterBrand: [],
			filterSize: []
		}
	}

	getProductsFromDatabase = () => {
		database.ref('/products').on('value', snapshot => {
			this.setState(
				{
					products: snapshot.val()
				},
				() => {
					this.getAllColors()
					this.getAllBrands()
					this.getAllSizes()
					this.getMinMaxPrice()
				}
			)
		})
	}

	componentWillMount = () => {
		this.getProductsFromDatabase()
	}

	getMinMaxPrice = () => {
		let array = Object.values(this.state.products)
		let prices = []
		array.map((item, index) => {
			for (let i = 0; i < item.groups.length; i++) {
				for (let j = 0; j < item.groups[i].attributes.length; j++) {
					prices.push(item.groups[i].attributes[j].price)
				}
			}
		})
		let min = Math.min(...prices) + 10
		let max = Math.max(...prices) + 10
		let value = {
			min,
			max
		}
		this.setState({
			priceValue: value,
			priceRange: value
		})
	}

	getAllColors = () => {
		let array = Object.values(this.state.products)
		let colorsArr = []
		array.map((item, index) => {
			for (let i = 0; i < item.groups.length; i++) {
				colorsArr.push(item.groups[i].color)
			}
		})
		colorsArr = colorsArr.filter(color => color.length)
		colorsArr = [...new Set(colorsArr)]
		this.setState({
			colors: colorsArr
		})
	}

	getAllBrands = () => {
		let array = Object.values(this.state.products)
		let brandsArr = []
		array.map((item, index) => {
			brandsArr.push(item.brend)
		})
		brandsArr = brandsArr.filter(brand => brand.length)
		brandsArr = [...new Set(brandsArr)]
		this.setState({
			brands: brandsArr
		})
	}

	getAllSizes = () => {
		let array = Object.values(this.state.products)
		let sizesArr = []
		array.map((item, index) => {
			for (let i = 0; i < item.groups.length; i++) {
				for (let j = 0; j < item.groups[i].attributes.length; j++) {
					console.log(item.groups[i].attributes[j].size)
					sizesArr.push(item.groups[i].attributes[j].size)
				}
			}
		})
		sizesArr = sizesArr.filter(size => size.length)
		sizesArr = [...new Set(sizesArr)]
		this.setState({
			sizes: sizesArr
		})
	}

	updateDataFilter = (group, value) => {
		if (group === 'price') {
			this.setState({
				priceRange: value
			})
		}
		if (group === 'gender') {
			this.setState({
				filterGender: value
			})
		}
	}

	toLowerCaseString = data => {
		return data.toLowerCase()
	}

	checkFilter = product => {
		let prices = []
		for (let i = 0; i < product.groups.length; i++) {
			for (let j = 0; j < product.groups[i].attributes.length; j++) {
				prices.push(product.groups[i].attributes[j].price)
			}
		}
		if (Math.min(...prices) >= this.state.priceRange.min && Math.max(...prices) <= this.state.priceRange.max) {
			if (!this.state.filterGender.length || product.gender == this.state.filterGender) {
				return true
			}
		}
		return false
	}

	renderProducts = () => {
		const { match } = this.props
		if (this.state.products !== null) {
			let generateArray = Object.values(this.state.products)
			let array = generateArray.filter(product => product.active && this.checkFilter(product))
			return array.map((item, index) => (
				<div className="col-lg-3 col-md-3 col-sm-3 col-3" key={item.id}>
					<div>
						<Link to={`/product/${match.params.parentCat}/${match.params.cat}/${item.name.en.toLowerCase()}`}>
							<img alt="" className="card-img" src={item.groups[0].imagesUrls[0]} />
						</Link>
						<div className="caption">
							<div className="title">{item.name.en}</div>
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
							<Filter
								colors={this.state.colors}
								brands={this.state.brands}
								sizes={this.state.sizes}
								price={this.state.priceValue}
								priceRange={this.state.priceRange}
								updateDataFilter={this.updateDataFilter}
							/>
						</div>
						<div className="col-lg-9 col-md-9 col-sm-6 col-12">{this.renderProducts()}</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Catalog
