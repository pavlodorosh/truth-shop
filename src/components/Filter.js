import React, { Component } from 'react'
import InputRange from 'react-input-range'
// import 'react-input-range/lib/css/index.css'

class Filter extends Component {
	state = {
		colors: [],
		brands: [],
		sizes: [],
		inputValue: ''
	}

	updateInputValue = evt => {
		this.setState({
			inputValue: evt.target.value
		})
	}

	render() {
		return (
			<>
				<div className="price_filter">
					<h4>Price</h4>
					<InputRange
						maxValue={this.props.price.max}
						minValue={this.props.price.min}
						step={1}
						onChange={value => this.props.updateDataFilter('price', value)}
						value={this.props.priceRange}
					/>
				</div>
				<section className="section_filter">
					<h4>Стать</h4>
					<div className="filter_list" aria-hidden="false" role="group">
						<ul>
							<li className="" onClick={() => this.props.updateDataFilter('gender', 'male')}>
								<input type="checkbox" id="fruit1" name="fruit-1" value="Apple" />
								<label for="fruit1">Male</label>
							</li>
							<li className="" onClick={() => this.props.updateDataFilter('gender', 'female')}>
								<input type="checkbox" value="" />
								<input type="checkbox" id="fruit2" name="fruit-1" value="Apple" />
								<label for="fruit2">Female</label>
							</li>
							<li className="" onClick={() => this.props.updateDataFilter('gender', 'unisex')}>
								<input type="checkbox" value="" />
								<input type="checkbox" id="fruit3" name="fruit-1" value="Apple" />
								<label for="fruit3">Unisex</label>
							</li>
							<li className="" onClick={() => this.props.updateDataFilter('gender', '')}>
								<input type="checkbox" value="" />
								<input type="checkbox" id="fruit4" name="fruit-1" value="Apple" />
								<label for="fruit4">All</label>
							</li>
						</ul>
					</div>
				</section>
				<section className="section_filter">
					<h4>Color</h4>
					<div className="filter_list_row" aria-hidden="false" role="group">
						<ul>
							{this.props.colors.length &&
								this.props.colors.map((color, index) => (
									<li onClick={() => this.props.updateDataFilter('color', color)} key={index} style={{ width: '20px', height: '20px', backgroundColor: color }} />
								))}
						</ul>
					</div>
				</section>
				<section className="section_filter">
					<h4>Brand</h4>
					<input type="text" name="brandAuto" value={this.state.inputValue} onChange={this.updateInputValue} />
					<div className="filter_list" aria-hidden="false" role="group">
						<ul>
							{this.props.brands.length &&
								this.props.brands.map((brand, index) => {
									if (brand.includes(this.state.inputValue)) {
										return (
											<li onClick={() => this.props.updateDataFilter('brand', brand)} key={index}>
												{brand}
											</li>
										)
									}
								})}
						</ul>
					</div>
				</section>
				<section className="section_filter">
					<h4>Size</h4>
					<div className="filter_list" aria-hidden="false" role="group">
						<ul>
							{this.props.sizes.length &&
								this.props.sizes.map((size, index) => (
									<li onClick={() => this.props.updateDataFilter('size', size)} key={index}>
										{size}
									</li>
								))}
						</ul>
					</div>
				</section>

				<section className="section_filter_reset">
					<button onClick={() => this.props.updateDataFilter('reset')} className="filter_button" aria-expanded="true" data-selected-facet-group-name="brandNameFacet">
						Reset All
					</button>
				</section>
			</>
		)
	}
}

export default Filter
