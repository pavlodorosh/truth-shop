import React, { Component } from 'react'
import { database, storage } from '../../firebase'
import { Textbox, Select } from 'react-inputs-validation'
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import ProductGroup from '../components/Product/ProductGroup'

export default class EditProduct extends Component {
	constructor(props) {
		super(props)
		this.state = {
			optionsListCategories: [],
			brend_list: [],
			category_list: [],
			id: '',
			name_en: '',
			name_ru: '',
			name_ua: '',
			description_en: '',
			description_ru: '',
			description_ua: '',
			return_en: '',
			return_ru: '',
			return_ua: '',
			care_en: '',
			care_ru: '',
			care_ua: '',
			model: '',
			category: '',
			parentCategory: '',
			image: {
				url: '',
				name: ''
			},
			select_brend: '',
			select_category: '',
			imagesForDelete: []
		}

		this.validateForms = this.validateForms.bind(this)
	}

	getProduct = () => {}

	componentWillMount = () => {
		const rootRef = database.ref('products')
		rootRef.limitToFirst(1).once('value', snap => {
			let prod = ''

			snap.forEach(child => {
				if (child.val().id === this.props.location.state.product.id) {
					prod = child.val()
				}
			})
			this.setState({ product: prod }, () => {
				this.setStateValue()
			})
		})

		this.getListCategories()
		this.getlistBrends()
	}

	getListCategories = () => {
		database.ref('/categories').on('value', snapshot => {
			this.setState({
				categories: snapshot.val()
			})
			this.pushCategoriesToSelect(snapshot.val())
		})
	}

	handleChangeParent = selectedOption => {
		this.setState({ selectedOption })
	}

	getListCategories = () => {
		database.ref('/categories').on('value', snapshot => {
			this.setState({
				categories: snapshot.val()
			})
			if (snapshot.val() !== undefined && snapshot.val() !== null) {
				this.pushCategoriesToSelect(snapshot.val())
			}
		})
	}

	getlistBrends = () => {
		database.ref('/brends').on('value', snapshot => {
			this.setState({
				brends: snapshot.val()
			})
			if (snapshot.val() !== undefined && snapshot.val() !== null) {
				this.pushBrendsToSelect(snapshot.val())
			}
		})
	}

	pushBrendsToSelect = data => {
		let brend_list = []

		Object.keys(data).map((id, index) => {
			let brend = {
				id: index,
				name: data[id].name
			}
			brend_list.push(brend)
		})

		this.setState(() => ({
			brend_list: brend_list
		}))
	}

	pushCategoriesToSelect = data => {
		let category_list = []

		Object.keys(data).map((id, index) => {
			let category = {
				id: index,
				name: data[id].name.en + ' -> ' + data[id].parentCategory,
				main: data[id].parentCategory,
				thisName: data[id].name.en
			}
			category_list.push(category)
		})

		this.setState(() => ({
			category_list: category_list
		}))
	}

	setStateValue = () => {
		this.setState({
			id: this.state.product.id,
			name_en: this.state.product.name.en,
			name_ru: this.state.product.name.ru,
			name_ua: this.state.product.name.ua,
			description_en: this.state.product.description.en,
			description_ru: this.state.product.description.ru,
			description_ua: this.state.product.description.ua,
			return_en: this.state.product.return.en,
			return_ru: this.state.product.return.ru,
			return_ua: this.state.product.return.ua,
			care_en: this.state.product.care.en,
			care_ru: this.state.product.care.ru,
			care_ua: this.state.product.care.ua,
			model: this.state.product.model,
			select_category: this.state.product.category,
			select_brend: this.state.product.brend,
			groups: this.state.product.groups,
			author: this.state.product.author
		})
	}

	toggleValidating(validate) {
		this.setState({ validate })
	}

	validateForms = () => {
		this.toggleValidating(true)
		if (!this.state.error_name_en && !this.state.error_name_ru && !this.state.error_name_ua) {
			this.updateDatabase()
		}
	}

	updateDatabase = () => {
		for (let i = 0; i < this.state.imagesForDelete.length; i++) {
			storage
				.ref('images/products/')
				.child(this.state.product.id)
				.child(this.state.imagesForDelete[i])
				.delete()
				.then(() => {
					console.log('images deleted')
				})
				.catch(err => {
					console.log(err)
				})
		}

		return database
			.ref('/products')
			.child(this.state.id)
			.update({
				groups: this.state.groups,
				id: this.state.id,
				brend: this.state.select_brend,
				active: false,
				name: {
					en: this.state.name_en,
					ru: this.state.name_ru,
					ua: this.state.name_ua
				},
				description: {
					en: this.state.description_en,
					ru: this.state.description_ru,
					ua: this.state.description_ua
				},
				return: {
					en: this.state.return_en,
					ru: this.state.return_ru,
					ua: this.state.return_ua
				},
				care: {
					en: this.state.care_en,
					ru: this.state.care_ru,
					ua: this.state.care_ua
				},
				model: this.state.model,
				category: this.state.category,
				parentCategory: this.state.parentCategory
			})
			.then(() => {
				this.forceUpdate()
			})
			.catch(err => {
				console.log(err)
			})
	}

	addGroup = () => {
		this.setState(prevState => ({
			groups: [
				...prevState.groups,
				{
					imagesNames: [],
					imagesUrls: [],
					color: '#eee',
					description_en_group: '',
					description_ru_group: '',
					description_ua_group: '',
					attributes: [
						{
							price: '',
							quantity: 0,
							sale: '',
							size: ''
						}
					]
				}
			]
		}))
	}

	addAttributes = index => {
		this.setState(prevState => {
			const newArr = [...prevState.groups]
			const newAttr = {
				price: '',
				quantity: 0,
				sale: '',
				size: ''
			}
			newArr[index].attributes.push(newAttr)

			return {
				groups: newArr
			}
		})
	}

	updateState = (index, colorParam, descrEn, descrRu, descrUa, imageNames, imageUrls) => {
		this.setState(prevState => {
			const newArr = [...prevState.groups]
			newArr[index].color = colorParam
			newArr[index].description_en_group = descrEn
			newArr[index].description_ru_group = descrRu
			newArr[index].description_ua_group = descrUa
			newArr[index].imagesNames = imageNames
			newArr[index].imagesUrls = imageUrls
			return { groups: newArr }
		})
	}

	updateAttr = (index, id, pricePar, quantityPar, salePar, sizePar) => {
		this.setState(prevState => {
			const newArr = [...prevState.groups]
			newArr[index].attributes[id].price = pricePar
			newArr[index].attributes[id].quantity = quantityPar
			newArr[index].attributes[id].sale = salePar
			newArr[index].attributes[id].size = sizePar
			return { groups: newArr }
		})
	}

	handleChildUnmount = index => {
		this.setState(prevState => {
			const newArr = [...prevState.groups]
			newArr.splice(index, 1)
			return { groups: newArr }
		})
	}

	removeAttributes = (index, id) => {
		this.setState(prevState => {
			const newArr = [...prevState.groups]
			newArr[index].attributes.splice(id, 1)
			return { groups: newArr }
		})
	}

	deleteImage = (index, id) => {
		let image = this.state.groups[index].imagesNames[id]

		this.setState(prevState => {
			return { imagesForDelete: [...prevState.imagesForDelete, image] }
		})

		this.setState(prevState => {
			const newArr = [...prevState.groups]
			newArr[index].imagesNames.splice(id, 1)
			newArr[index].imagesUrls.splice(id, 1)
			return { groups: newArr }
		})

		// storage
		// 	.ref('images/products/')
		// 	.child(this.state.id)
		// 	.child(image)
		// 	.delete()
		// 	.then(() => {
		// 		console.log('images deleted')
		// 	})
		// 	.catch(err => {
		// 		console.log(err)
		// 	})
	}

	render() {
		return (
			<div className="col-md-9">
				{this.state.product && (
					<div className="row">
						<div className="content-body">
							<div className="panel-heading">
								<div className="col-12">
									<div className="row">
										<h3 className="panel-title">Add product </h3>
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
													className="form-control"
													name="name_en"
													onChange={(val, e) => {
														this.setState({ name_en: val })
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
													classNameInput="ama_input_validate"
													classNameContainer="ama_input_container"
													classNameWrapper="ama_input_wrapper"
													value={this.state.name_en}
													validate={this.state.validate}
												/>
											</div>
											<div className="form-group">
												<label>Description [en]</label>
												<ReactQuill
													id="description_en"
													modules={EditProduct.modules}
													formats={EditProduct.formats}
													value={this.state.description_en}
													placeholder="Body"
													onChange={e => {
														this.setState({ description_en: e })
													}}
												/>
											</div>
											<div className="form-group">
												<label>Return [en]</label>
												<ReactQuill
													id="return_en"
													modules={EditProduct.modules}
													formats={EditProduct.formats}
													value={this.state.return_en}
													placeholder="Body"
													onChange={e => {
														this.setState({ return_en: e })
													}}
												/>
											</div>
											<div className="form-group">
												<label>Care [en]</label>

												<ReactQuill
													id="care_en"
													modules={EditProduct.modules}
													formats={EditProduct.formats}
													value={this.state.care_en}
													placeholder="Body"
													onChange={e => {
														this.setState({ care_en: e })
													}}
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
														this.setState({ name_ru: val })
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
													classNameInput="ama_input_validate"
													classNameContainer="ama_input_container"
													classNameWrapper="ama_input_wrapper"
													value={this.state.name_ru}
													validate={this.state.validate}
												/>
											</div>
											<div className="form-group">
												<label>Description [RU]</label>
												<ReactQuill
													id="description_ru"
													modules={EditProduct.modules}
													formats={EditProduct.formats}
													value={this.state.description_ru}
													placeholder="Body"
													onChange={e => {
														this.setState({ description_ru: e })
													}}
												/>
											</div>
											<div className="form-group">
												<label>Return [ru]</label>

												<ReactQuill
													id="return_ru"
													modules={EditProduct.modules}
													formats={EditProduct.formats}
													value={this.state.return_ru}
													placeholder="Body"
													onChange={e => {
														this.setState({ return_ru: e })
													}}
												/>
											</div>
											<div className="form-group">
												<label>Care [ru]</label>
												<ReactQuill
													id="care_ru"
													modules={EditProduct.modules}
													formats={EditProduct.formats}
													value={this.state.care_ru}
													placeholder="Body"
													onChange={e => {
														this.setState({ care_ru: e })
													}}
												/>
											</div>
										</div>
										<div className="tab-pane" id="messages" role="tabpanel">
											<div className="form-group">
												<label>Name [UA]</label>
												<Textbox
													type="text"
													className="form-control"
													name="name_ua"
													onChange={(val, e) => {
														this.setState({ name_ua: val })
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
													classNameInput="ama_input_validate"
													classNameContainer="ama_input_container"
													classNameWrapper="ama_input_wrapper"
													value={this.state.name_ua}
													validate={this.state.validate}
												/>
											</div>
											<div className="form-group">
												<label>Description [UA]</label>
												<ReactQuill
													id="description_ua"
													modules={EditProduct.modules}
													formats={EditProduct.formats}
													value={this.state.description_ua}
													placeholder="Body"
													onChange={e => {
														this.setState({ description_ua: e })
													}}
												/>
											</div>
											<div className="form-group">
												<label>Return [ua]</label>
												<ReactQuill
													id="return_ua"
													modules={EditProduct.modules}
													formats={EditProduct.formats}
													value={this.state.return_ua}
													placeholder="Body"
													onChange={e => {
														this.setState({ return_ua: e })
													}}
												/>
											</div>
											<div className="form-group">
												<label>Care [ua]</label>
												<ReactQuill
													id="care_ua"
													modules={EditProduct.modules}
													formats={EditProduct.formats}
													value={this.state.care_ua}
													placeholder="Body"
													onChange={e => {
														this.setState({ care_ua: e })
													}}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="detail col-sm-12">
									<div className="form-group ama_flex">
										<label>Model</label>
										<Textbox
											type="text"
											className="form-control"
											name="model"
											onChange={(val, e) => {
												this.setState({ model: val })
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
											classNameInput="ama_input_validate"
											classNameContainer="ama_input_container"
											classNameWrapper="ama_input_wrapper"
											value={this.state.model}
											validate={this.state.validate}
										/>
									</div>
								</div>
								<div className="detail col-sm-12">
									<div className="form-group ama_flex">
										<label>Brend</label>
										<Select
											classNameSelect="ama_input_select"
											classNameContainer="ama_input_container"
											classNameWrapper="ama_input_wrapper"
											name="brend"
											optionList={this.state.brend_list}
											onChange={(brend, e) => {
												let brendName = this.state.brend_list[brend].name
												this.setState({ select_brend: brendName })
											}}
											onBlur={() => {}}
											value={this.state.select_brend}
											selectHtml={`${this.state.select_brend}`}
										/>
									</div>
									<div className="form-group">
										<label>Product groups</label>

										{this.state.groups &&
											this.state.groups.map((val, index) => {
												return (
													<ProductGroup
														key={index}
														index={index}
														groups={this.state.groups}
														updateState={this.updateState}
														removeMe={this.handleChildUnmount}
														removeAttributes={this.removeAttributes}
														addAttr={this.addAttributes}
														updateAttr={this.updateAttr}
														productId={this.state.id}
														deleteImage={this.deleteImage}
													/>
												)
											})}

										<button onClick={this.addGroup}>add..</button>
									</div>
									<div className="form-group">
										<label>Category </label>
										<Select
											classNameSelect="ama_input_select"
											classNameContainer="ama_input_container"
											classNameWrapper="ama_input_wrapper"
											name="category"
											optionList={this.state.category_list}
											onChange={(category, e) => {
												this.setState({
													select_category: this.state.category_list[category].name,
													category: this.state.category_list[category].thisName,
													parentCategory: this.state.category_list[category].main
												})
											}}
											onBlur={() => {}}
											value={this.state.select_category}
											selectHtml={`${this.state.select_category}`}
										/>
									</div>
								</div>

								<button>
									<Link to="/user/products"> Back</Link>
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
				)}
			</div>
		)
	}
}

EditProduct.modules = {
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

EditProduct.formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image', 'video', 'code-block']
