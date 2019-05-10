import React, { Component } from 'react'
import { database, auth } from '../../firebase'
import { Textbox, Select } from 'react-inputs-validation'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import { setUserInfo } from '../../redux/actions'
import ProductGroup from '../components/Product/ProductGroup'

class AddProduct extends Component {
	constructor(props) {
		super(props)
		this.state = {
			groups: [
				{
					imagesNames: [],
					imagesUrls: [],
					color: '',
					description_en_group: '',
					description_ru_group: '',
					description_ua_group: ''
				}
			],
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
			price: 0,
			quantity: 0,
			category: '',
			parentCategory: '',
			image: {
				url: '',
				name: ''
			},
			optionsListCategories: []
		}

		this.validateForms = this.validateForms.bind(this)
		this.updateState = this.updateState.bind(this)
		this.handleChildUnmount = this.handleChildUnmount.bind(this)
	}

	componentDidMount = () => {
		this.getListCategories()
		this.setState({ id: uuid() })
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

	handleChangeParent = selectedOption => {
		this.setState({ selectedOption })
	}

	pushCategoriesToSelect = data => {
		return Object.keys(data).map(id => {
			let category = {
				value: data[id].name.en,
				parent: data[id].parentCategory,
				label: data[id].parentCategory + ' > ' + data[id].name.en
			}
			this.setState(prevState => ({
				optionsListCategories: [...prevState.optionsListCategories, category]
			}))
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
		return database
			.ref('/products')
			.child(this.state.id)
			.set({
				id: this.state.id,
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
				mainImageUrl: this.state.image.url,
				mainImageName: this.state.image.name,
				images: [this.state.image],
				price: this.state.price,
				author: this.props.user.displayName,
				model: this.state.model,
				category: this.state.selectedOption.value,
				parentCategory: this.state.selectedOption.parent,
				sizes: '',
				colors: '',
				actions: '',
				weather: '',
				active: false,
				quantity: 0
			})
	}

	addGroup = e => {
		this.setState(prevState => ({
			groups: [
				...prevState.groups,
				{
					imagesNames: [],
					imagesUrls: [],
					color: '',
					description_en_group: '',
					description_ru_group: '',
					description_ua_group: ''
				}
			]
		}))
	}

	updateState = (index, colorParam, descrEn, descrRu, descrUa) => {
		this.setState(prevState => {
			const newArr = [...prevState.groups]
			newArr[index].color = colorParam
			newArr[index].description_en_group = descrEn
			newArr[index].description_ru_group = descrRu
			newArr[index].description_ua_group = descrUa
			return { groups: newArr }
		})
	}

	handleChildUnmount = index => {
		console.log(index)
		this.setState(prevState => {
			const newArr = [...prevState.groups]
			newArr.splice(index, 1)
			return { groups: newArr }
		})
	}

	render() {
		let { groups } = this.state

		return (
			<div className="col-md-9">
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
											<Textbox
												type="text"
												className="form-control"
												name="description_en"
												onChange={(val, e) => {
													this.setState({ description_en: val })
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
												classNameInput="ama_input_validate"
												classNameContainer="ama_input_container"
												classNameWrapper="ama_input_wrapper"
												value={this.state.description_en}
												validate={this.state.validate}
											/>
										</div>
										<div className="form-group">
											<label>Return [en]</label>
											<Textbox
												type="text"
												className="form-control"
												name="return_en"
												onChange={(val, e) => {
													this.setState({ return_en: val })
												}}
												onBlur={() => {}}
												validationOption={{
													name: 'Return',
													check: false,
													required: true,
													showMsg: true
												}}
												validationCallback={res => {
													this.setState({
														return_en: res,
														validate: false
													})
												}}
												classNameInput="ama_input_validate"
												classNameContainer="ama_input_container"
												classNameWrapper="ama_input_wrapper"
												value={this.state.return_en}
												validate={this.state.validate}
											/>
										</div>
										<div className="form-group">
											<label>Care [en]</label>

											<Textbox
												type="text"
												className="form-control"
												name="care_en"
												onChange={(val, e) => {
													this.setState({ care_en: val })
												}}
												onBlur={() => {}}
												validationOption={{
													name: 'Care',
													check: false,
													required: true,
													showMsg: true
												}}
												validationCallback={res => {
													this.setState({
														care_en: res,
														validate: false
													})
												}}
												classNameInput="ama_input_validate"
												classNameContainer="ama_input_container"
												classNameWrapper="ama_input_wrapper"
												value={this.state.care_en}
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
											<Textbox
												type="text"
												className="form-control"
												name="description_ru"
												onChange={(val, e) => {
													this.setState({ description_ru: val })
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
												classNameInput="ama_input_validate"
												classNameContainer="ama_input_container"
												classNameWrapper="ama_input_wrapper"
												value={this.state.description_ru}
												validate={this.state.validate}
											/>
										</div>
										<div className="form-group">
											<label>Return [ru]</label>
											<Textbox
												type="text"
												className="form-control"
												name="return_ru"
												onChange={(val, e) => {
													this.setState({ return_ru: val })
												}}
												classNameInput="ama_input_validate"
												classNameContainer="ama_input_container"
												classNameWrapper="ama_input_wrapper"
												value={this.state.return_ru}
											/>
										</div>
										<div className="form-group">
											<label>Care [ru]</label>
											<Textbox
												name="care_ru"
												className="form-control"
												value={this.state.care_ru}
												onChange={(val, e) => {
													this.setState({ care_ru: val })
												}}
												classNameInput="ama_input_validate"
												classNameContainer="ama_input_container"
												classNameWrapper="ama_input_wrapper"
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
											<Textbox
												type="text"
												className="form-control"
												name="description_ua"
												onChange={(val, e) => {
													this.setState({ description_ua: val })
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
												classNameInput="ama_input_validate"
												classNameContainer="ama_input_container"
												classNameWrapper="ama_input_wrapper"
												value={this.state.description_ua}
												validate={this.state.validate}
											/>
										</div>
										<div className="form-group">
											<label>Return [ua]</label>
											<Textbox
												name="return_ua"
												className="form-control"
												value={this.state.return_ua}
												onChange={(val, e) => {
													this.setState({ return_ua: val })
												}}
												classNameInput="ama_input_validate"
												classNameContainer="ama_input_container"
												classNameWrapper="ama_input_wrapper"
											/>
										</div>
										<div className="form-group">
											<label>Care [ua]</label>
											<Textbox
												name="care_ua"
												className="form-control"
												value={this.state.care_ua}
												onChange={(val, e) => {
													this.setState({ care_ua: val })
												}}
												classNameInput="ama_input_validate"
												classNameContainer="ama_input_container"
												classNameWrapper="ama_input_wrapper"
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
									<Select classNameSelect="ama_input_select" classNameContainer="ama_input_container" classNameWrapper="ama_input_wrapper" />
								</div>
								<div className="form-group">
									<label>Product groups</label>

									{groups.map((val, index) => {
										return <ProductGroup key={index} index={index} groups={groups} updateState={this.updateState} removeMe={this.handleChildUnmount} />
									})}

									<button onClick={this.addGroup}>add..</button>
								</div>
								<div className="form-group">
									<label>Category </label>
									<Select classNameSelect="ama_input_select" classNameContainer="ama_input_container" classNameWrapper="ama_input_wrapper" />
								</div>
								<button>add..</button>
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
			</div>
		)
	}
	static mapStateToProps = state => {
		return {
			user: state.userInfo
		}
	}

	static mapStateToDispatch = dispatch => {
		return {
			setUserInfo: data => dispatch(setUserInfo(data))
		}
	}
}

export default connect(
	AddProduct.mapStateToProps,
	AddProduct.mapStateToDispatch
)(AddProduct)
