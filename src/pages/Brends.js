import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { database } from '../firebase'

class Brens extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: {}
		}
	}
	getCategoriesFromDatabase = () => {
		database.ref('/categories').on('value', snapshot => {
			this.setState({
				categories: snapshot.val()
			})
		})
	}

	componentWillMount = () => {
		this.getCategoriesFromDatabase()
	}

	filterCategories = item => {
		return this.state.categories[item].parentCategory === this.props.Brens
	}

	filteredAndReducedCategories = () => {
		if (this.state.categories !== null) {
			const filtered = Object.keys(this.state.categories)
				.filter(item => this.state.categories[item].parentCategory === this.props.Brens)
				.reduce((obj, key) => {
					return {
						...obj,
						[key]: this.state.categories[key]
					}
				}, {})

			return filtered
		}
		return null
	}

	toLowerCaseString = data => {
		return data.toLowerCase()
	}

	renderCategories = () => {
		let array = this.filteredAndReducedCategories()

		return Object.keys(array).map((item, id) => (
			<div className="col-12 col-md-3 brends_single" key={id}>
				<div className="row">
					<Link to={`/catalog/${this.toLowerCaseString(array[item].parentCategory)}/${this.toLowerCaseString(array[item].name.en)}`}>
						<img alt={array[item].name.en} className="img-fluid" src={array[item].preview} />

						<span className="brends_single_name" align="middle">
							{array[item].name.en}
						</span>
					</Link>
				</div>
			</div>
		))
	}

	render() {
		return (
			<div className="container-fluid brands_page">
				<div className="container">
					<div className="row">
						<div class="title_brands">
							<h1>Brands</h1>
						</div>

						<div className="brands_list">{this.renderCategories()}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Brens
