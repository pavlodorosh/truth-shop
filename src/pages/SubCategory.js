import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, BSpan, Media, BImg, Breadcrumb } from 'bootstrap-4-react'
import { database } from '../firebase'

class SubCategory extends Component {
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
		return this.state.categories[item].parentCategory === this.props.subcategory
	}

	filteredAndReducedCategories = () => {
		if (this.state.categories !== null) {
			const filtered = Object.keys(this.state.categories)
				.filter(item => this.state.categories[item].parentCategory === this.props.subcategory)
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

	renderCategories = () => {
		let array = this.filteredAndReducedCategories()
		console.log(array)

		return Object.keys(array).map((item, id) => (
			<Col className="px-0 " col="lg-6" key={id}>
				<Media>
					<Link to="/catalog">
						<BImg className="img-fluid" src={array[item].preview} />

						<BSpan className="subcategory_name" align="middle">
							{array[item].name.en}
						</BSpan>
					</Link>
				</Media>
			</Col>
		))
	}

	render() {
		return (
			<div className="SubCategoty">
				<Container fluid={true}>
					<Container>
						<Row className="no-gutter">
							<nav aria-label="breadcrumb">
								<Breadcrumb>
									<Breadcrumb.Item>
										<span>Home</span>
									</Breadcrumb.Item>
									<Breadcrumb.Item active aria-current="page">
										Library
									</Breadcrumb.Item>
								</Breadcrumb>
							</nav>
						</Row>
						<Row className="no-gutter">{this.renderCategories()}</Row>
					</Container>
				</Container>
			</div>
		)
	}
}

export default SubCategory
