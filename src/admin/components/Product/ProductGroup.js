import React, { Component } from 'react'
import { Textbox } from 'react-inputs-validation'
import { database } from '../../../firebase'
import ProductAttribute from './ProductAttribute'
import add from '../../../assets/img/add.png'
import { SwatchesPicker } from 'react-color'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default class ProductGroups extends Component {
	state = {
		color: '#fff',
		colorPickerActive: false,
		descrEn: '',
		descrRu: '',
		descrUa: ''
	}

	handleChangeColorComplete = color => {
		this.setState(
			{
				color: color.hex,
				colorPickerActive: false
			},
			() => {
				this.props.updateState(this.props.index, this.state.color)
			}
		)
	}

	switchColorPicker = () => {
		this.setState({ colorPickerActive: !this.state.colorPickerActive })
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value }, () => {
			this.props.updateState(this.props.index, this.state.color, this.state.descrEn, this.state.descrRu, this.state.descrUa)
		})
	}

	deleteThisComponent = index => {
		this.props.removeMe(index)
	}

	render() {
		const { index, groups } = this.props

		return (
			<div className="grops_product" style={{ backgroundColor: '#ffffff', border: '1px solid #000' }}>
				<div className="grop_product">
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
								<span className="nav-link active" data-toggle="tab" href={`#en${index}`} role="tab">
									EN
								</span>
							</li>
							<li className="nav-item">
								<span className="nav-link" data-toggle="tab" href={`#ru${index}`} role="tab">
									RU
								</span>
							</li>
							<li className="nav-item">
								<span className="nav-link" data-toggle="tab" href={`#ua${index}`} role="tab">
									UA
								</span>
							</li>
						</ul>

						<div className="tab-content">
							<div className="tab-pane active" id={`en${index}`} role="tabpanel">
								<div className="form-group">
									<label>Description [en]</label>
									{/* <input className="form-control" value={groups[index].description_en_group} onChange={this.handleChange} name="descrEn" /> */}
									<ReactQuill
										id="descrEn"
										modules={ProductGroups.modules}
										formats={ProductGroups.formats}
										value={groups[index].description_en_group}
										placeholder="Body"
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="tab-pane" id={`ru${index}`} role="tabpanel">
								<div className="form-group">
									<label>Description [RU]</label>
									{/* <input className="form-control" value={groups[index].description_ru_group} onChange={this.handleChange} name="descrRu" /> */}
									<ReactQuill
										id="descrEn"
										modules={ProductGroups.modules}
										formats={ProductGroups.formats}
										value={groups[index].description_ru_group}
										placeholder="Body"
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="tab-pane" id={`ua${index}`} role="tabpanel">
								<div className="form-group">
									<label>Description [UA]</label>
									{/* <input className="form-control" value={groups[index].description_ua_group} onChange={this.handleChange} name="descrUa" /> */}
									<ReactQuill
										id="descrUa"
										modules={ProductGroups.modules}
										formats={ProductGroups.formats}
										value={groups[index].description_ua_group}
										placeholder="Body"
										onChange={this.handleChange}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="form-group ">
						<label>Atribyte </label>
						<div className="atr">
							<div className="product_attributes_add">
								<div className="form-group">
									<label>Price</label>
								</div>
								<div className="form-group">
									<label>Quantity </label>
								</div>
								<div className="form-group">
									<label>Sale</label>
								</div>
								<div className="form-group">
									<label>Size</label>
								</div>
							</div>

							{groups[index].attributes.map((val, indexx) => {
								return <ProductAttribute key={indexx} id={indexx} index={index} groups={groups} updateAttr={this.props.updateAttr} />
							})}

							<button
								style={{ width: '100%' }}
								onClick={() => {
									this.props.addAttr(index)
								}}>
								add..
							</button>
						</div>
					</div>
					{groups.length > 1 && (
						<button
							onClick={() => {
								this.deleteThisComponent(index)
							}}>
							remove..
						</button>
					)}
				</div>
			</div>
		)
	}
}

ProductGroups.modules = {
	toolbar: [
		[{ header: '1' }, { header: '2' }, { font: [] }],
		[{ size: [] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[{ list: 'ordered' }, { list: 'bullet' }],
		['link', 'image'],
		['clean'],
		['code-block']
	]
}

ProductGroups.formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image', 'video', 'code-block']
