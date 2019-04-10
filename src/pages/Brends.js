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
			<div className="p-0 col-md-6 sub" key={id}>
				<Link to={`/catalog/${this.toLowerCaseString(array[item].parentCategory)}/${this.toLowerCaseString(array[item].name.en)}`}>
					<img alt="" className="img-fluid" src={array[item].preview} />

					<span className="Brens_name" align="middle">
						{array[item].name.en}
					</span>
				</Link>
			</div>
		))
	}

	render() {
		return (
			<div className="SubCategoty">
				<div className="container-fluid">
					<div className="container">
						<div className="row no-gutter">{this.renderCategories()}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Brens
