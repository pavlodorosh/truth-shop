import React, { Component } from 'react'
import { storage } from '../../../firebase'
import ProductAttribute from './ProductAttribute'
import add from '../../../assets/img/add.png'
import { SwatchesPicker } from 'react-color'
import 'react-quill/dist/quill.snow.css'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default class ProductGroups extends Component {
	state = {
		color: '#fff',
		colorPickerActive: false,
		desEn: '',
		desRu: '',
		desUa: '',
		username: '',
		imageArr: [],
		isUploading: false,
		progress: 0,
		imageURLArr: []
	}

	handleChangeColorComplete = color => {
		this.setState(
			{
				color: color.hex,
				colorPickerActive: false
			},
			() => {
				this.props.updateState(this.props.index, this.state.color, this.state.descrEn, this.state.desRu, this.state.desUa, this.state.imageArr, this.state.imageURLArr)
			}
		)
	}

	switchColorPicker = () => {
		this.setState({ colorPickerActive: !this.state.colorPickerActive })
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value }, () => {
			this.props.updateState(this.props.index, this.state.color, this.state.desEn, this.state.desRu, this.state.desUa, this.state.imageArr, this.state.imageURLArr)
		})
	}

	handleQuillChange = e => {
		this.setState({
			desEn: e
		})
	}

	deleteThisComponent = index => {
		this.props.removeMe(index)
	}

	handleChangeUsername = event => {
		this.setState({
			username: event.target.value
		})
	}

	handleUploadStart = () => {
		this.setState({
			isUploading: true,
			progress: 0
		})
	}
	handleProgress = progress => {
		this.setState({ progress })
	}

	handleUploadError = error => {
		this.setState({ isUploading: false })
		console.error(error)
	}
	handleUploadSuccess = filename => {
		this.setState(prevState => {
			let newImageArr = [...prevState.imageArr, filename]

			return {
				imageArr: newImageArr,
				progress: 100,
				isUploading: false
			}
		})
		storage
			.ref('images/products/' + this.props.productId)
			.child(filename)
			.getDownloadURL()
			.then(url =>
				this.setState(
					prevState => {
						let newUrlArr = [...prevState.imageURLArr, url]
						return {
							imageURLArr: newUrlArr
						}
					},
					() => {
						this.props.updateState(this.props.index, this.state.color, this.state.descrEn, this.state.desRu, this.state.desUa, this.state.imageArr, this.state.imageURLArr)
					}
				)
			)
	}

	render() {
		const { index, groups } = this.props

		return (
			<div className="grops_product" style={{ backgroundColor: '#ffffff', border: '1px solid #000' }}>
				<div className="grop_product">
					<div className="form-group">
						<label>All images</label>
						<div className="allimageproduct image_preview_list">
							{this.state.imageURLArr.map(item => (
								<img src={item} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
							))}
							<CustomUploadButton
								accept="image/*"
								name="products"
								randomizeFilename
								storageRef={storage.ref('images/products/' + this.props.productId)}
								onUploadStart={this.handleUploadStart}
								onUploadError={this.handleUploadError}
								onUploadSuccess={this.handleUploadSuccess}
								onProgress={this.handleProgress}
								style={{ backgroundImage: `url(${add})`, cursor: 'pointer', width: '100px', height: '100px', backgroundSize: '100px 100px' }}
							/>
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
									<ReactQuill
										id="descrEn"
										modules={ProductGroups.modules}
										formats={ProductGroups.formats}
										value={this.state.desEn}
										placeholder="Body"
										onChange={e => {
											this.setState(
												{
													desEn: e
												},
												() => {
													this.props.updateState(this.props.index, this.state.color, this.state.desEn, this.state.desRu, this.state.desUa)
												}
											)
										}}
									/>
								</div>
							</div>
							<div className="tab-pane" id={`ru${index}`} role="tabpanel">
								<div className="form-group">
									<label>Description [RU]</label>
									<ReactQuill
										id="descrEn"
										modules={ProductGroups.modules}
										formats={ProductGroups.formats}
										value={this.state.desRu}
										placeholder="Body"
										onChange={e => {
											this.setState(
												{
													desRu: e
												},
												() => {
													this.props.updateState(this.props.index, this.state.color, this.state.desEn, this.state.desRu, this.state.desUa)
												}
											)
										}}
									/>
								</div>
							</div>
							<div className="tab-pane" id={`ua${index}`} role="tabpanel">
								<div className="form-group">
									<label>Description [UA]</label>
									<ReactQuill
										id="descrUa"
										modules={ProductGroups.modules}
										formats={ProductGroups.formats}
										value={groups[index].description_ua_group}
										placeholder="Body"
										value={this.state.desUa}
										placeholder="Body"
										onChange={e => {
											this.setState(
												{
													desUa: e
												},
												() => {
													this.props.updateState(this.props.index, this.state.color, this.state.desEn, this.state.desRu, this.state.desUa)
												}
											)
										}}
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
