import React, { Component } from 'react'
import { Modal } from 'bootstrap-4-react'
import Select from 'react-select'
import { storage, database } from '../../../firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
import { Line } from 'rc-progress'
import uuid from 'uuid/v1'
import { Textbox } from 'react-inputs-validation'
import 'react-inputs-validation/lib/react-inputs-validation.min.css'

class AddCategory extends Component {
	state = {
		name_en: '',
		name_ru: '',
		name_ua: '',
		link: '',
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
			.ref('images')
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
				link: this.state.link,
				preview: this.state.previewUrl,
				parentCategory: this.state.selectedOption.value,
				previewName: this.state.imagePreview
			})
			.then(() => {
				document.getElementById('exampleModal').click('hide')
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
			link: '',
			selectedOption: null,
			previewUrl: ''
		})
	}

	toggleValidating(validate) {
		this.setState({ validate })
	}

	validateForm = e => {
		e.preventDefault()
		this.toggleValidating(true)
		if (!this.state.error_name_ua && !this.state.error_name_en && !this.state.error_name_ru && !this.state.error_link && this.state.previewUrl.length && this.state.selectedOption) {
			this.saveCategory()
		}
	}

	render() {
		return (
			<>
				<Modal id="exampleModal" fade>
					<Modal.Dialog>
						<Modal.Content>
							<Modal.Header>
								<Modal.Title>Add new subcategory</Modal.Title>
								<Modal.Close>
									<span aria-hidden="true">&times;</span>
								</Modal.Close>
							</Modal.Header>
							<Modal.Body>
								<form className="add-category-form" onSubmit={this.validateForm}>
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
											<span className="nav-link" data-toggle="tab" href="#profileua" role="tab">
												UA
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#messages" role="tab">
												DETAIL
											</span>
										</li>
									</ul>

									<div className="tab-content">
										<div className="tab-pane active" id="home" role="tabpanel">
											<div className="form-group">
												<label className="col-lg-6 p-0">Name [en]</label>
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
												<label className="col-lg-6 p-0">Name [ru]</label>
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
										<div className="tab-pane" id="profileua" role="tabpanel">
											<div className="form-group">
												<label className="col-lg-6 p-0">Name [ua]</label>
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
										<div className="tab-pane" id="messages" role="tabpanel">
											<div className="form-group">
												<label className="col-lg-6 p-0">Link</label>
												<Textbox
													type="text"
													className="form-control col-lg-6 p-0"
													name="link"
													onChange={(val, e) => {
														this.setState({ [e.target.name]: val })
													}}
													onBlur={() => {}}
													validationOption={{
														name: 'Link',
														check: true,
														required: true,
														showMsg: true
													}}
													validationCallback={res => {
														this.setState({
															error_link: res,
															validate: false
														})
													}}
													value={this.state.link}
													validate={this.state.validate}
												/>
											</div>
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
												<label className="col-lg-6 p-0">Select category</label>
												<Select className="col-lg-6 p-0" value={this.state.selectedOption} onChange={this.handleChangeParent} options={this.state.options} />
											</div>
										</div>
									</div>

									<button data-dismiss="modal" onClick={this.clearInputs}>
										Close
									</button>
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
}
export default AddCategory
