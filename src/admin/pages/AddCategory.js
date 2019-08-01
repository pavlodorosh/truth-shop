import React, { Component } from 'react'
import Select from 'react-select'
import { storage, database } from '../../firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
import { Line } from 'rc-progress'
import { Link } from 'react-router-dom'
import uuid from 'uuid/v1'
import { Textbox } from 'react-inputs-validation'
import 'react-inputs-validation/lib/react-inputs-validation.min.css'

class AddCategory extends Component {
	state = {
		name_en: '',
		name_ru: '',
		name_ua: '',
		selectedOption: null,
		options: [
			{
				value: 'Accessories',
				label: 'Accessories'
			},
			{
				value: 'Men',
				label: 'Men'
			},
			{
				value: 'Women',
				label: 'Women'
			},
			{
				value: 'Kids',
				label: 'Kids'
			},
			{
				value: 'Products',
				label: 'Products'
			}
		],
		isUploading: false,
		progress: 0,
		imagePreview: '',
		previewUrl: '',
		categoriesRef: database.ref('categories'),
		validate: false,
		error_name_en: true,
		error_name_ru: true,
		error_name_ua: true,
		error_link: true
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
		this.setState({ imagePreview: filename, progress: 100, isUploading: false })
		storage
			.ref('images/categories')
			.child(filename)
			.getDownloadURL()
			.then(url => this.setState({ previewUrl: url }))
	}

	handleChangeParent = selectedOption => {
		this.setState({ selectedOption })
	}

	saveCategory = () => {
		return this.state.categoriesRef
			.child(this.state.selectedOption.value + this.state.name_en + '-' + uuid())
			.set({
				name: {
					en: this.state.name_en,
					ru: this.state.name_ru,
					ua: this.state.name_ua
				},
				preview: this.state.previewUrl,
				parentCategory: this.state.selectedOption.value,
				previewName: this.state.imagePreview
			})
			.then(() => {
				window.location.href = '/user/categories'
			})
			.catch(err => {
				console.log(err)
			})
	}

	clearInputs = () => {
		this.setState({
			name_en: '',
			name_ru: '',
			selectedOption: null,
			previewUrl: ''
		})
	}

	toggleValidating(validate) {
		this.setState({ validate })
	}

	validateForms = () => {
		this.toggleValidating(true)
		if (!this.state.error_name_ua && !this.state.error_name_en && !this.state.error_name_ru && this.state.previewUrl.length && this.state.selectedOption) {
			this.saveCategory()
		}
	}

	render() {
		return (
			<>
				<div className="col-md-9">
					<div className="row">
						<div className="content-body">
							<div className="panel-heading">
								<div className="col-12">
									<div className="row">
										<h3 className="panel-title">Add category</h3>
									</div>
								</div>
							</div>
							<div className="panel-body">
								<div className="product_description col-sm-12">
									<ul className="nav nav-tabs" role="tablist">
										<li className="nav-item">
											<span className="nav-link active" data-toggle="tab" href="#home" role="tab">
												EN
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#profile" role="tab">
												RU
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#messages" role="tab">
												UA
											</span>
										</li>
									</ul>

									<div className="tab-content">
										<div className="tab-pane active" id="home" role="tabpanel">
											<div className="form-group">
												<label>Name [en] </label>
												<Textbox
													type="text"
													className="form-control col-lg-6 p-0"
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
										</div>
										<div className="tab-pane" id="profile" role="tabpanel">
											<div className="form-group">
												<label>Name [RU]</label>
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
										</div>
										<div className="tab-pane" id="messages" role="tabpanel">
											<div className="form-group">
												<label>Name [UA]</label>
												<Textbox
													type="text"
													className="form-control col-lg-6 p-0"
													name="name_ua"
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
															error_name_ua: res,
															validate: false
														})
													}}
													value={this.state.name_ua}
													validate={this.state.validate}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="detail col-sm-12">
									<div className="form-group">
										<label style={{ width: '100%' }}>Select preview image</label>
										{this.state.isUploading && (
											<p>
												Progress: <Line percent={this.state.progress} strokeWidth="2" strokeColor="#4682b4" />
											</p>
										)}
										{this.state.previewUrl && <img src={this.state.previewUrl} alt="preview" />}

										<CustomUploadButton
											accept="image/*"
											name="avatar"
											storageRef={storage.ref('images/categories')}
											onUploadStart={this.handleUploadStart}
											onUploadError={this.handleUploadError}
											onUploadSuccess={this.handleUploadSuccess}
											onProgress={this.handleProgress}
											style={{ backgroundColor: 'steelblue', color: 'white', padding: 10, borderRadius: 4, cursor: 'pointer' }}>
											Upload
										</CustomUploadButton>
									</div>
									<div className="form-group">
										<label className="col-lg-6 p-0">Select category</label>
										<Select className="col-lg-6 p-0" value={this.state.selectedOption} onChange={this.handleChangeParent} options={this.state.options} />
									</div>
								</div>

								<button>
									<Link to="/user/categories"> Back</Link>
								</button>
								<button
									primary="true"
									onClick={() => {
										this.validateForms()
									}}>
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default AddCategory
