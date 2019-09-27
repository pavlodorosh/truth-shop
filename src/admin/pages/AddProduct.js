import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'
import Switch from 'react-flexible-switch'
import { Textbox, Radiobox, Checkbox } from 'react-inputs-validation'
import uuid from 'uuid/v4'
import { adminData } from './Admin';
import { database, storage } from '../../firebase'
import { SwatchesPicker } from 'react-color'
import Select from 'react-select'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'
import addImage from '../../assets/img/add.png'


import TopPanes from '../components/Product/TopPanes'



const AddProduct = () => {

	const data = useContext(adminData)
	const product = data.newProduct

	const [id, setId] = useState(uuid())
	const [pickerActive, setPickerActive] = useState(false)
	const [attributesState, setAttributesState] = useState(data.attributes)
	const [groupsState, setGroupsState] = useState([])
	const [categoriesOptions, setCategoriesOptions] = useState([])
	const [photos, setPhotos] = useState([])
	const [isUploading, setIsUploading] = useState(false)

	useEffect(()=>{
		database.ref('/attributes').on('value', snapshot => {
			let dbAttr = snapshot.val()
			let newArr = Object.keys(dbAttr).map((id) => {
				let newAttr = {
					label: dbAttr[id].label,
					name: dbAttr[id].name,
					type: dbAttr[id].type,
					variants: dbAttr[id].variants,
				}
				return newAttr
			})

			setAttributesState([...data.attributes, ...newArr])
		})	
		
		database.ref('/groups').on('value', snapshot => {
			let dbGroup = snapshot.val()
			let newArr = Object.keys(dbGroup).map((id) => {
				let newGroup = {
					label: dbGroup[id].name,
					name: dbGroup[id].name,
					attributes: dbGroup[id].attributes,
				}
				return newGroup
			})

			setGroupsState(newArr)
		})

		database.ref('/categories').on('value', snapshot => {
			let dbCategories = snapshot.val()
			let catArr= Object.keys(dbCategories).map((id)=>{
				let newCat = {
					label: dbCategories[id].parentCategory + ' --> ' + dbCategories[id].name.en,
					name: dbCategories[id].name, 
					parentCategory: dbCategories[id].parentCategory
				}
				return newCat
			})
			setCategoriesOptions(catArr)
		})
	})

	const saveToBase = (data) => {	
		return database
			.ref('/products')
			.child(id)
			.set(data)
			.then(() => {
				window.location.href = '/admin/products'
			})
			.catch(err => {
				console.log(err)
			})
	}


	const removeOption = (name) => {
		product.simpleAttributes = product.simpleAttributes.filter((item)=> {
			return item.name != name
		})
		delete product.options[name]
	}
	const removeGroup = (name) => {
		product.groupAttributes = product.groupAttributes.filter((item)=> {
			return item.name != name
		})
		delete product.groupOptions[name]
	}

	const handleChangeColorComplete = (color) => {
		product.options.color = color.hex
        setPickerActive(false)
	}

	const handleChangeColorGroupComplete = (group, color) => {
		product.groupOptions[group].color = color.hex
	}

	const handleUploadSuccess = (group, filename) => {
		console.log(group)
		setIsUploading(false)
		storage
			.ref('images/products/' + id)
			.child(filename)
			.getDownloadURL()
			.then(url => {
				let newPhoto = {
					name: filename,
					url: url
				}
				if(!group){					
					let prevPhotos = photos
					prevPhotos.push(newPhoto)
					setPhotos(prevPhotos)
					product.options.images = photos
				} else {
					if(product.groupOptions[group].images) {
						let oldImages = product.groupOptions[group].images
						oldImages.push(newPhoto)
					} else {
						product.groupOptions[group].images = []
						let oldImages = product.groupOptions[group].images
						oldImages.push(newPhoto)
					}
				}				
			})
	  }

	const addSimpleAttribute = {
		system: (attr, isGroup = false, group = null) => {
			switch(attr.name){
				case 'image':
					return (
						<div className="detail col-sm-11">
							<div className="form-group ama_flex">
								{ !isGroup && <span className="delete_property col-lg-1" onClick={()=>{removeOption(attr.name)}}>X</span> }
								<label>Images</label>
								<div className="image-upload-wrapper">
									<CustomUploadButton
										accept="image/*"
										storageRef={storage.ref('images/products/' + id)}
										onUploadStart={() => setIsUploading(true)}
										onUploadError={() => setIsUploading(false)}
										onUploadSuccess={handleUploadSuccess.bind(this, group)}
										// onProgress={handleProgress}
										style={{width: 'auto', }}
									>
										<img className="image-upload" src={addImage}/>
									</CustomUploadButton>
									{
										!isGroup && 
											product.options.images &&
												product.options.images.map((image) => {
													return (
														<img className="image-upload" src={image.url}/>
													)
												})
									}
									{
										isGroup && 
											product.groupOptions[group].images &&
												product.groupOptions[group].images.map((image) => {
													return (
														<img className="image-upload" src={image.url}/>
													)
												})
									}
								</div>
							</div>
						</div>
					)
				case 'color':
					if(!isGroup){
						return (
							<div className="col-lg-11">
								<div className="form-group ama_flex">
									<span className="delete_property col-lg-1" onClick={()=>{removeOption(attr.name)}}>X</span> 
									<label onClick={()=>setPickerActive(!pickerActive)}>Choose color</label>
									<span style={{ backgroundColor: product.options.color, width: '30px', height: '30px', display: 'inline-block' }} /> 
									{pickerActive ? <SwatchesPicker color={product.options.color} onChangeComplete={handleChangeColorComplete} /> : ''}
								</div>
							</div>
						)
					} else {
						return (
							<div className="col-lg-11">
								<div className="form-group ama_flex">
									<label>Choose color</label> 
									<SwatchesPicker color={product.groupOptions[group].color} onChangeComplete={handleChangeColorGroupComplete.bind(this, group)} /> 
								</div>
							</div>
						)
					}
					
				case 'gender':
					return (
						<div className="detail col-sm-11">
							<div className="form-group ama_flex">
								{ !isGroup && <span className="delete_property col-lg-1" onClick={()=>{removeOption(attr.name)}}>X</span> }
								<label>Gender</label>
								<Radiobox
									tabIndex={0}
									value={product.gender}
									customStyleContainer={{
										display: 'flex',
										justifyContent: 'flex-start'
									}}
									onChange={gender => {
										isGroup ?  product.groupOptions[group].gender = gender  : product.options.gender = gender
									}}
									onBlur={e => {
										console.log(e)
									}}
									optionList={[{ id: 'male', name: 'Male' }, { id: 'female', name: 'Female' },  { id: 'unisex', name: 'Unisex' }]}
								/>
							</div>
						</div>
					)
				case 'price':
					return (
						<div className="detail col-sm-11">
							<div className="form-group ama_flex">
								{ !isGroup && <span className="delete_property col-lg-1" onClick={()=>{removeOption(attr.name)}}>X</span> }
								<label>Price</label>
								<Textbox
									type="text"
									className="form-control"
									name="name_en"
									onChange={(val) => {
										// addValue.text(attr.name, val)
										isGroup ? product.groupOptions[group].price = val : product.options.price = val

									}}
									onBlur={() => {}}
									classNameInput="ama_input_validate"
									classNameContainer="ama_input_container"
									classNameWrapper="ama_input_wrapper"
									validationOption={{
										required: true,
										type: 'number'
									}}
								/>
							</div>
						</div>
					)
				case 'discount':
					return (
						<div className="detail col-sm-11">
							<div className="form-group ama_flex">
								{ !isGroup && <span className="delete_property col-lg-1" onClick={()=>{removeOption(attr.name)}}>X</span> }
								<label>Discount</label>
								<Textbox
									type="text"
									className="form-control"
									name="name_en"
									onChange={(val) => {
										// addValue.text(attr.name, val)
										isGroup ? product.groupOptions[group].discount = val : product.options.discount = val

									}}
									onBlur={() => {}}
									classNameInput="ama_input_validate"
									classNameContainer="ama_input_container"
									classNameWrapper="ama_input_wrapper"
									validationOption={{
										required: true,
										type: 'number'
									}}
								/>
							</div>
						</div>
					)
			}
		},
		text: (attr, isGroup = false, group = null) => {
			return (
				<div className="col-lg-11" key={attr.name}>	
					<div className="form-group ama_flex">
						{ !isGroup && <span className="delete_property col-lg-1" onClick={()=>{removeOption(attr.name)}}>X</span> }
						<label>{attr.name}</label>
						<Textbox
							type="text"
							className="form-control"
							name="name_en"
							onChange={(val) => {
								// addValue.text(attr.name, val)
								isGroup ? product.groupOptions[group][attr.name] = val : product.options[attr.name] = val

							}}
							onBlur={() => {}}
							classNameInput="ama_input_validate"
							classNameContainer="ama_input_container"
							classNameWrapper="ama_input_wrapper"
						/>
					</div>
				</div>
			)		
		},
		radio: (attr, isGroup = false, group = null) => {
			let newArray = attr.variants.map((item, index) => {
				let element = {
					id: index,
					name: item
				}
				return element
			})
			return (
				<div className="col-lg-11" key={attr.name}>	
					<div className="form-group ama_flex">
						{ !isGroup && <span className="delete_property col-lg-1" onClick={()=>{removeOption(attr.name)}}>X</span> }
						<label>{attr.name}</label>
						<Radiobox
							type="text"
							className="form-control"
							name="name_en"
							onChange={(val) => {
								isGroup ? product.groupOptions[group][attr.name] = newArray[val].name  : product.options[attr.name] = newArray[val].name 
							}}
							optionList={newArray}
							onBlur={() => {}}
							classNameInput="ama_input_validate"
							classNameContainer="ama_input_container"
							classNameWrapper="ama_input_wrapper"
						/>
					</div>
				</div>
			)		
		},
		check: (attr, isGroup = false, group = null) => {
			return (
				<div className="col-lg-11" key={attr.name}>	
					<div className="form-group ama_flex">
						{ !isGroup && <span className="delete_property col-lg-1" onClick={()=>{removeOption(attr.name)}}>X</span> }
						<label>{attr.name}</label>
						<Checkbox
							type="text"
							className="form-control"
							name="name_en"
							onChange={(val) => {
								isGroup ? product.groupOptions[group][attr.name] = val : product.options[attr.name] = val
							}}
							onBlur={() => {}}
							classNameInput="ama_input_validate"
							classNameContainer="ama_input_container"
							classNameWrapper="ama_input_wrapper"
						/>
					</div>
				</div>
			)		
		},
	}

	const addGroupAttributes = group => {
		return (
			<div className="col-lg-11 group_new_product" key={group.name}>
				<span className="delete_property col-lg-1" onClick={()=>{removeGroup(group.name)}}>X</span>
				{group.attributes.map((attr) => {
					let target = null
					attributesState.forEach((item)=>{
						if(item.name == attr){
							target = item
						}
					})
					return addSimpleAttribute[target.type](target, true, group.name)
				})}
			</div>
		)
	}

	return (
		<>
			<div className="col-md-9">
				<div className="row">
					<div className="content-body">
						<div className="panel-heading">
							<div className="col-12">
								<div className="row">
									<h3 className="panel-title">Add product </h3>									
									<button>
										<Link to="/admin/products"> Back</Link>
									</button>
									<button
										primary="true"
										onClick={() => {
											saveToBase(product)
										}}>
										Save
									</button>
								</div>
							</div>
						</div>	
						
						<Switch
							value={product.active}
							onChange={() => {
								product.active = !product.active
							}}
						/>

						<Select 
							placeholder="Choose Category"
							onChange={e => {
								product.category = e.name
								product.parentCategory = e.parentCategory
							}}
							options={categoriesOptions}
							className="col-lg-4"
						/>

						<TopPanes/>

						

						{		
							product.simpleAttributes && 
								product.simpleAttributes.map((attr) => {
									return addSimpleAttribute[attr.type](attr)
								})
						}
						{		
							product.groupAttributes.length > 0 && 
								product.groupAttributes.map((group) => {
									return addGroupAttributes(group)
								})
						}

						<Select
							value=""
							placeholder="Add Option"
							onChange={e => {
								product.simpleAttributes.push(e)
							}}
							options={attributesState}
							className="col-lg-4"
						/>

						
						<Select
							value=""
							placeholder="Add Group Options"
							onChange={e => {
								let newName = e.name + uuid()
								product.groupOptions[newName] = {}
								e.name = newName
								product.groupAttributes.push(e)
							}}
							options={groupsState}
							className="col-lg-4"
						/>

					</div>
				</div>
			</div>
		</>
	)
}


export default AddProduct
