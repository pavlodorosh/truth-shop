import React, { useEffect, useState, useContext } from 'react'
import { storage, database } from '../../firebase'
import { Textbox } from 'react-inputs-validation'
import { Link } from 'react-router-dom'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
import Select from 'react-select'
import { adminData } from './Admin';

const EditCategory = (props) => {
	const data = useContext(adminData)

	const [category, getCategory] = useState(null)

	useEffect(()=>{
		database.ref('/categories').once('value', snapshot => {
			let arr = Object.keys(snapshot.val()).map((item) => {				
				if(item == props.match.params.id && category == null){
					getCategory(snapshot.val()[item])
				}
			})
		})
	})

	
	if (category != null ) {
		return (
			<div className="col-md-9">
				<div className="row">
					<div className="content-body">
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
											value={category.name.en}
											onChange={(val, e) => {
												getCategory(prevCategory => {
													prevCategory.name.en = val
													return prevCategory
												})
											}}
											onBlur={() => {}}
											validationOption={{
												name: 'Name',
												check: true,
												required: true,
												showMsg: true
											}}
											validationCallback={res => {
												// this.setState({
												// 	error_name_en: res,
												// 	validate: false
												// })
											}}
											// value={this.state.name_en}
											// validate={this.state.validate}
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
											value={category.name.ru}
											onChange={(val, e) => {
												getCategory(prevCategory => {
													prevCategory.name.ru = val
													return prevCategory
												})
											}}
											onBlur={() => {}}
											validationOption={{
												name: 'Name',
												check: true,
												required: true,
												showMsg: true
											}}
											validationCallback={res => {
												// this.setState({
												// 	error_name_ru: res,
												// 	validate: false
												// })
											}}
											// value={this.state.name_ru}
											// validate={this.state.validate}
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
											value={category.name.ua}
											onChange={(val, e) => {
												getCategory(prevCategory => {
													prevCategory.name.ua = val
													return prevCategory
												})
											}}
											onBlur={() => {}}
											validationOption={{
												name: 'Name',
												check: true,
												required: true,
												showMsg: true
											}}
											validationCallback={res => {
												// this.setState({
												// 	error_name_ua: res,
												// 	validate: false
												// })
											}}
											// value={this.state.name_ua}
											// validate={this.state.validate}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="detail col-sm-12">
							<div className="form-group">
								<label style={{ width: '200px' }}>Change preview image</label>
								
	
								<CustomUploadButton
									accept="image/*"
									name="avatar"
									randomizeFilename
									storageRef={storage.ref('images')}
									// onUploadStart={this.handleUploadStart}
									// onUploadError={this.handleUploadError}
									// onUploadSuccess={this.handleUploadSuccess}
									// onProgress={this.handleProgress}
									style={{ cursor: 'pointer' }}
								>
									<img style={{ width: '200px' }} src={category.preview} alt="preview" />
								</CustomUploadButton>
							</div>
							<div className="form-group">
								<label className="col-lg-6 p-0">Parent Category - {category.parentCategory}</label>
								<Select 
									className="col-lg-6 p-0" 
									value={category.parentCategory} 
									onChange={(e)=> {
										getCategory(prevCategory => {
											prevCategory.parentCategory = e.label
											return prevCategory
										})
									}} 
									options={data.parentCategories} 
								/> 
							</div>
						</div>
					</div>
					<button>
						<Link to="/user/products"> Back</Link>
					</button>
					<button
						primary="true"
						onClick={() => {
							// this.validateForms()
						}}>
						Save
					</button>
				</div>
			</div>
		)
	} else {
		return <></>
	}
}

export default EditCategory