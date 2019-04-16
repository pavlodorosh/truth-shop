import React, { Component } from 'react'
import { Modal } from 'bootstrap-4-react'
import { storage, database } from '../../../firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
import { Line } from 'rc-progress'
import uuid from 'uuid/v1'
import { Textbox } from 'react-inputs-validation'
import 'react-inputs-validation/lib/react-inputs-validation.min.css'

class AddBrend extends Component {
	state = {
		name: '',
		description_en: '',
		description_ru: '',
		description_ua: '',
		isUploading: false,
		progress: 0,
		imagePreview: '',
		previewUrl: '',
		brendsRef: database.ref('brends'),
		validate: false,
		error_name: true,
		error_description_en: true,
		error_description_ru: true,
		error_description_ua: true
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

	saveBrend = () => {
		return this.state.brendsRef
			.child(this.state.name + '-' + uuid())
			.set({
				name: this.state.name,
				description: {
					en: this.state.description_en,
					ru: this.state.description_ru,
					ua: this.state.description_ua
				},
				preview: this.state.previewUrl,
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
			name: '',
			previewUrl: '',
			description_en: '',
			description_ru: '',
			description_ua: ''
		})
	}

	toggleValidating(validate) {
		this.setState({ validate })
	}

	validateForm = e => {
		e.preventDefault()
		this.toggleValidating(true)
		if (!this.state.error_name && this.state.previewUrl.length) {
			this.saveBrend()
		}
	}

	render() {
		return (
			<>
				<Modal id="exampleModal" fade>
					<Modal.Dialog>
						<Modal.Content>
							<Modal.Header>
								<Modal.Title>Add new brends</Modal.Title>
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
												Description
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#profileua" role="tab">
												Description
											</span>
										</li>
										<li className="nav-item">
											<span className="nav-link" data-toggle="tab" href="#messages" role="tab">
												Description
											</span>
										</li>
									</ul>

									<div className="tab-content">
										<div className="tab-pane active" id="home" role="tabpanel">
											<div className="form-group">
												<label className="col-lg-6 p-0">Name</label>
												<Textbox
													type="text"
													className="form-control col-lg-6 p-0"
													name="name"
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
															error_name: res,
															validate: false
														})
													}}
													value={this.state.name}
													validate={this.state.validate}
												/>

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
										</div>
										<div className="tab-pane" id="profile" role="tabpanel">
											<div className="form-group">
												<label className="col-lg-6 p-0">Description [en]</label>
												<Textbox
													type="text"
													className="form-control col-lg-6 p-0"
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
										<div className="tab-pane" id="profileua" role="tabpanel">
											<div className="form-group">
												<label className="col-lg-6 p-0">Description [ru]</label>
												<Textbox
													type="text"
													className="form-control col-lg-6 p-0"
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
												<label className="col-lg-6 p-0">Description [ua]</label>
												<Textbox
													type="text"
													className="form-control col-lg-6 p-0"
													name="description_ua"
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
															error_description_ua: res,
															validate: false
														})
													}}
													value={this.state.description_ua}
													validate={this.state.validate}
												/>
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
export default AddBrend
