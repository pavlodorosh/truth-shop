import React, { Component } from 'react'
import { Textbox } from 'react-inputs-validation'
import { database } from '../../../firebase'
import ProductAttribute from './ProductAttribute'
import add from '../../../assets/img/add.png'
import { SwatchesPicker } from 'react-color'

export default class ProductGroups extends Component {
	state = {
		color: '#fff',
		colorPickerActive: false
	}

	handleChangeColorComplete = color => {
		this.setState({
			color: color.hex,
			colorPickerActive: false
		})
	}

	switchColorPicker = () => {
		this.setState({ colorPickerActive: !this.state.colorPickerActive })
	}

	render() {
		return this.props.groups.map((val, idx) => {
			let imageNamesId = `imageNames-${idx}`
			let imageUrlsId = `imageUrls-${idx}`
			let colorId = `colorId-${idx}`
			let descrEnId = `descrEnId-${idx}`
			let descrRuId = `descrRuId-${idx}`
			let descrUaId = `descrUaId-${idx}`

			return (
				<div className="grops_product" style={{ backgroundColor: '#ffffff', border: '1px solid #000' }}>
					<div className="grop_product">
						<h6>{`Group #${idx + 1}`}</h6>
						<div className="form-group">
							<label>All images</label>
							<div className="allimageproduct image_preview_list">
								<img className="image_item add_new" src={add} alt="" />
							</div>
						</div>
						<div className="form-group">
							<label onClick={this.switchColorPicker}>Choose color</label>
							<span style={{ backgroundColor: this.state.color, width: '30px', height: '30px', display: 'block' }} />
							{this.state.colorPickerActive ? <SwatchesPicker color={this.state.color} onChangeComplete={this.handleChangeColorComplete} /> : ''}
						</div>
						<div className="product_description">
							<ul className="nav nav-tabs" role="tablist">
								<li className="nav-item">
									<span className="nav-link active" data-toggle="tab" href="#en" role="tab">
										EN
									</span>
								</li>
								<li className="nav-item">
									<span className="nav-link" data-toggle="tab" href="#ru" role="tab">
										RU
									</span>
								</li>
								<li className="nav-item">
									<span className="nav-link" data-toggle="tab" href="#ua" role="tab">
										UA
									</span>
								</li>
							</ul>

							<div className="tab-content">
								<div className="tab-pane active" id="en" role="tabpanel">
									<div className="form-group">
										<label>Description [en]</label>
										<Textbox
											name={descrEnId}
											className="form-control"
											classNameInput="ama_input_validate"
											classNameContainer="ama_input_container"
											classNameWrapper="ama_input_wrapper"
										/>
									</div>
								</div>
								<div className="tab-pane" id="ru" role="tabpanel">
									<div className="form-group">
										<label>Description [RU]</label>
										<Textbox
											name={descrRuId}
											className="form-control"
											classNameInput="ama_input_validate"
											classNameContainer="ama_input_container"
											classNameWrapper="ama_input_wrapper"
										/>
									</div>
								</div>
								<div className="tab-pane" id="ua" role="tabpanel">
									<div className="form-group">
										<label>Description [UA]</label>
										<Textbox
											name={descrUaId}
											className="form-control"
											classNameInput="ama_input_validate"
											classNameContainer="ama_input_container"
											classNameWrapper="ama_input_wrapper"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="form-group ">
							<label>Atribyte </label>
							<div className="atr">{/* <ProductAttribute /> */}</div>
						</div>
					</div>
				</div>
			)
		})
	}
}
