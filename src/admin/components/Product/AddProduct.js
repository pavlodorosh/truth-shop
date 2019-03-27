import React, { Component } from 'react'
import { Modal } from 'bootstrap-4-react'
import Select from 'react-select'
import { storage, database } from '../../../firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
import { Line } from 'rc-progress'
import uuid from 'uuid/v1'
import { Textbox } from 'react-inputs-validation'
import 'react-inputs-validation/lib/react-inputs-validation.min.css'
import { connect } from 'react-redux'

class AddProduct extends Component {
	state = {
		description_en: '',
		description_ru: '',
		price: '',
		date: '',
		name_en: '',
		name_ru: '',
		selectedCategory: null,
		optionsListCategories: [],
		isUploading: false,
		progress: 0,
		mainImageUrl: '',
		mainImageName: '',
		model: '',
		productsRef: database.ref('/products'),
		validate: false,
		error_name_en: true,
		error_name_ru: true,
		error_description_en: true,
		error_description_ru: true,
		error_link: true,
		error_model: true,
		categories: {}
	}

	getListCategories = () => {
		database.ref('/categories').on('value', snapshot => {
			this.setState({
				categories: snapshot.val()
			})
			this.pushCategoriesToSelect(snapshot.val())
		})
	}

	pushCategoriesToSelect = data => {
		return Object.keys(data).map(id => {
			let category = {
				value: data[id].name.en,
				parent: data[id].parentCategory,
				label: data[id].parentCategory + ' > ' + data[id].name.en
			}
			this.setState({
				optionsListCategories: [...this.state.optionsListCategories, category]
			})
		})
	}

	handleChangeParent = selectedOption => {
		this.setState({ selectedOption })
	}

	componentWillMount = () => {
		this.getListCategories()
	}

	handleUploadStart = () => {
		this.setState({ isUploading: true, progress: 0 })
	}

	handleProgress = progress => {
		this.setState({ progress })
	}

	handleUploadError = err => {
		this.setState({ isUploading: false })
		console.log(err)
	}

	handleUploadSuccess = filename => {
		this.setState({ mainImageName: filename, progress: 100, isUploading: false })
		storage
			.ref('images')
			.child(filename)
			.getDownloadURL()
			.then(url => this.setState({ mainImageUrl: url }))
	}

	saveProduct = () => {
		return this.state.productsRef
			.child(this.state.name_en + '-' + uuid())
			.set({
				name: {
					en: this.state.name_en,
					ru: this.state.name_ru
				},
				description: {
					en: this.state.description_en,
					ru: this.state.description_ru
				},
				mainImageName: this.state.mainImageName,
				mainImageUrl: this.state.mainImageUrl,
				price: this.state.price,
				author: this.props.user.displayName,
				model: this.state.model,
				category: this.state.selectedOption.value,
				parentCategory: this.state.selectedOption.parent,
				sizes: '',
				colors: '',
				additionalImages: '',
				actions: '',
				weather: '',
				active: false,
				care: '',
				quantity: 0
			})
			.then(() => {
				document.getElementById('productModal').click('hide')
				this.clearInputs()
			})
			.catch(err => {
				console.log(err)
			})
	}

	clearInputs = () => {
		this.setState({
			name_en: '',
			name_ru: '',
			description_en: '',
			model: '',
			description_ru: '',
			selectedCategory: null,
			mainImageName: '',
			mainImageUrl: '',
			price: 0
		})
	}

	toggleValidating(validate) {
		this.setState({ validate })
	}

	validateForm = e => {
		e.preventDefault()
		this.toggleValidating(true)
		if (!this.state.error_name_en && !this.state.error_name_ru && this.state.mainImageName.length && this.state.price > 0) {
			this.saveProduct()
		}
	}

	render() {
		return (
			<>
				<Modal id="productModal" fade>
					<Modal.Dialog>
						<Modal.Content>
							<Modal.Header>
								<Modal.Title>Add new product</Modal.Title>
								<Modal.Close>
									<span aria-hidden="true">&times;</span>
								</Modal.Close>
							</Modal.Header>
							<Modal.Body>
								<form className="add-category-form" onSubmit={this.validateForm}>
									<ul className="nav nav-tabs" role="tablist">
										<li className="nav-item">
											<span className="nav-link active" data-toggle="tab" href="#home" role="tab">
												DETAILS
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#profile" role="tab">
												CARE
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#messages" role="tab">
												RETURN
											</span>
										</li>
									</ul>

									<div className="tab-content">
										<div className="tab-pane active" id="home" role="tabpanel">
											<div className="form-group">
												<label>Name [en]</label>
												<Textbox
													type="text"
													className="form-control"
													name="name_en"
													onChange={(val, e) => {
														this.setState({ [e.target.name]: val })
													}}
													onBlur={() => {}}
													validationOption={{
														name: 'Name',
														check: true,
														required: true,
														showMsg: true
													}}
													validationCallback={res => {
														this.setState({
															error_name_en: res,
															validate: false
														})
													}}
													value={this.state.name_en}
													validate={this.state.validate}
												/>
											</div>
											<div className="form-group">
												<label>Description [en]</label>
												<Textbox
													type="text"
													className="form-control"
													name="description_en"
													onChange={(val, e) => {
														this.setState({ [e.target.name]: val })
													}}
													onBlur={() => {}}
													validationOption={{
														name: 'Description',
														check: true,
														required: true,
														showMsg: true
													}}
													validationCallback={res => {
														this.setState({
															error_description_en: res,
															validate: false
														})
													}}
													value={this.state.description_en}
													validate={this.state.validate}
												/>
											</div>
										</div>
										<div className="tab-pane" id="profile" role="tabpanel">
											<div className="form-group">
												<label>Name [ru]</label>
												<Textbox
													type="text"
													className="form-control"
													name="name_ru"
													onChange={(val, e) => {
														this.setState({ [e.target.name]: val })
													}}
													onBlur={() => {}}
													validationOption={{
														name: 'Name',
														check: true,
														required: true,
														showMsg: true
													}}
													validationCallback={res => {
														this.setState({
															error_name_ru: res,
															validate: false
														})
													}}
													value={this.state.name_ru}
													validate={this.state.validate}
												/>
											</div>
											<div className="form-group">
												<label>Description [ru]</label>
												<Textbox
													type="text"
													className="form-control"
													name="description_ru"
													onChange={(val, e) => {
														this.setState({ [e.target.name]: val })
													}}
													onBlur={() => {}}
													validationOption={{
														name: 'Description',
														check: true,
														required: true,
														showMsg: true
													}}
													validationCallback={res => {
														this.setState({
															error_description_ru: res,
															validate: false
														})
													}}
													value={this.state.description_ru}
													validate={this.state.validate}
												/>
											</div>
										</div>

										<div className="tab-pane" id="messages" role="tabpanel">
											<div className="form-group">
												<label>Model</label>
												<Textbox
													type="text"
													className="form-control"
													name="model"
													onChange={(val, e) => {
														this.setState({ [e.target.name]: val })
													}}
													onBlur={() => {}}
													validationOption={{
														name: 'Model',
														check: true,
														required: true,
														showMsg: true
													}}
													validationCallback={res => {
														this.setState({
															error_model: res,
															validate: false
														})
													}}
													value={this.state.model}
													validate={this.state.validate}
												/>
											</div>
											<div className="form-group">
												<label>Price</label>
												<Textbox
													type="text"
													className="form-control"
													name="price"
													placeholder="0"
													onChange={(val, e) => {
														this.setState({ [e.target.name]: val })
													}}
													onBlur={() => {}}
													validationOption={{
														name: 'Price',
														type: 'number',
														check: true,
														required: true,
														showMsg: true,
														min: 1
													}}
													validationCallback={res => {
														this.setState({
															error_link: res,
															validate: false
														})
													}}
													value={this.state.price}
													validate={this.state.validate}
												/>
											</div>
											<div className="form-group">
												<label style={{ width: '100%' }}>Select main image</label>
												{this.state.isUploading && (
													<p>
														Progress: <Line percent={this.state.progress} strokeWidth="2" strokeColor="#4682b4" />
													</p>
												)}
												{this.state.mainImageUrl && <img src={this.state.mainImageUrl} alt="preview" />}

												<CustomUploadButton
													accept="image/*"
													name="avatar"
													randomizeFilename
													storageRef={storage.ref('images')}
													onUploadStart={this.handleUploadStart}
													onUploadError={this.handleUploadError}
													onUploadSuccess={this.handleUploadSuccess}
													onProgress={this.handleProgress}
													style={{ backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer' }}>
													Upload
												</CustomUploadButton>
											</div>
											<div className="form-group">
												<label>Category</label>
												<Select value={this.state.selectedCategory} onChange={this.handleChangeParent} options={this.state.optionsListCategories} />
											</div>
										</div>
									</div>

									<button data-dismiss="modal">Close</button>
									<button type="submit" primary="true" onClick={this.validateForm}>
										Save
									</button>
								</form>
							</Modal.Body>
						</Modal.Content>
					</Modal.Dialog>
				</Modal>
			</>
		)
	}

	static mapStateToProps = state => {
		return {
			user: state.userInfo
		}
	}
}
export default connect(
	AddProduct.mapStateToProps,
	null
)(AddProduct)