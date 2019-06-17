import React, { Component } from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

class Filter extends Component {
	state = {
		colors: [],
		brands: [],
		sizes: []
	}

	render() {
		return (
			<>
				<div className="price_filter">
					<InputRange
						maxValue={this.props.price.max}
						minValue={this.props.price.min}
						step={1}
						onChange={value => this.props.updateDataFilter('price', value)}
						value={this.props.priceRange}
					/>
				</div>
				<section className="section_filter">
					<h3 className="filter_name">
						{/* <button className="filter_button" aria-expanded="true" data-selected-facet-group-name="brandNameFacet">
							Gender
							<span className="filter_span" />
						</button> */}
						<span className="filter_icon" />
					</h3>
					<div className="filter_list" aria-hidden="false" role="group">
						<ul>
							<li className="" onClick={() => this.props.updateDataFilter('gender', 'male')}>
								<span>Male</span>
							</li>
							<li className="" onClick={() => this.props.updateDataFilter('gender', 'female')}>
								<span>Female</span>
							</li>
							<li className="" onClick={() => this.props.updateDataFilter('gender', 'unisex')}>
								<span>Unisex</span>
							</li>
						</ul>
					</div>
				</section>
				<section className="section_filter">
					<h3 className="filter_name">
						<button className="filter_button" aria-expanded="true" data-selected-facet-group-name="brandNameFacet">
							Color
						</button>
						<span className="filter_icon" />
					</h3>
					<div className="filter_list" aria-hidden="false" role="group">
						<ul>{this.props.colors.length && this.props.colors.map((color, index) => <li key={index} style={{ width: '20px', height: '20px', backgroundColor: color }} />)}</ul>
					</div>
				</section>
				<section className="section_filter">
					<h3 className="filter_name">
						<button className="filter_button" aria-expanded="true" data-selected-facet-group-name="brandNameFacet">
							Brand
						</button>
					</h3>
					<div className="filter_list" aria-hidden="false" role="group">
						<ul>{this.props.brands.length && this.props.brands.map((brand, index) => <li key={index}>{brand}</li>)}</ul>
					</div>
				</section>
				<section className="section_filter">
					<h3 className="filter_name">
						<button className="filter_button" aria-expanded="true" data-selected-facet-group-name="brandNameFacet">
							Size
						</button>
					</h3>
					<div className="filter_list" aria-hidden="false" role="group">
						<ul>{this.props.sizes.length && this.props.sizes.map((size, index) => <li key={index}>{size}</li>)}</ul>
					</div>
				</section>
			</>
		)
	}
}

export default Filter
