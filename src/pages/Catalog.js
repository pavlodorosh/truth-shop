import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'bootstrap-4-react'
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
			const filtered = Object.keys(this.state.products)
				.filter(item => match.url === `/catalog/${this.toLowerCaseString(this.state.products[item].parentCategory)}/${this.state.products[item].category}`)
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
		// console.log(match.path)
		// console.log(match.url.toString())

		if (this.state.products !== null) {
			return Object.keys(array).map((id, index) => (
				<Col className="" col="lg-3" key={id}>
					<Card>
						<Link to={`/product/${this.toLowerCaseString(this.state.products[id].parentCategory)}/${this.state.products[id].category}/${this.state.products[id].name.en}`}>
							<Card.Image src={this.state.products[id].mainImageUrl} />
						</Link>
						<Card.Body>
							<Card.Title>{this.state.products[id].name.en}</Card.Title>
						</Card.Body>
						<Card.Footer>
							<Card.Link>Card Link</Card.Link>
							<Card.Link>Another Link</Card.Link>
						</Card.Footer>
					</Card>
				</Col>
			))
		}
	}

	render() {
		return (
			<Container fluid={true}>
				<Container>
					<Row className="no-gutter">{this.renderProducts()}</Row>
				</Container>
			</Container>
		)
	}
}
export default Catalog
