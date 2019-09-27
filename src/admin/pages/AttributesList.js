import React, {useContext, useState, useEffect}  from 'react'
import { Textbox, Checkbox } from 'react-inputs-validation'
import Select from 'react-select'
import { adminData } from './Admin'
import { database } from '../../firebase'
import uuid from 'uuid/v4'

const Attributes = () => {
	const data = useContext(adminData)

	const [newOptionVisible, setNewOptionVisible] = useState(false)
	const [nameOption, setNameOption] = useState('')
	const [typeOption, setTypeOption] = useState('')
	const [variantsOption, setVariantsOption] = useState(false)
	const [optionsArray, addOrRemoveItem] = useState([''])
	const [editVariants, setEditVariants] = useState(null)
	const [idVariants, setIdVariants] = useState('')
	const [simpleAttributes, getAttributes] = useState(null)
	const [groupsFromDB, getGroups] = useState(null)

	useEffect(()=>{
		database.ref('/attributes').on('value', snapshot => {
			getAttributes(snapshot.val())			
		})
		database.ref('/groups').on('value', snapshot => {
			getGroups(snapshot.val())			
		})
	})

	const types = [
		{
			value: 'text',
			label: 'Text'
		},
		{
			value: 'radio',
			label: 'Radio'
		},
		{
			value: 'check',
			label: 'Check'
		},
	]

	const saveAttributeToBase = () => {
		let attribute
		if(typeOption != 'radio'){
			attribute = {
				name: nameOption,
				type: typeOption,
				variants: null,
				id: nameOption + uuid(),
				label: nameOption
			}
		} else {
			attribute = {				
				name: nameOption,
				type: typeOption,
				variants: optionsArray,
				id: nameOption + uuid(),
				label: nameOption
			}
		}

		if(nameOption.length > 2 && typeOption != ''){
			return database
				.ref('/attributes')
				.child(nameOption + uuid())
				.set(attribute)
				.then(() => {
					addOrRemoveItem([''])
					setNewOptionVisible(false)
					setVariantsOption(false)
					setNameOption('')
				})
				.catch(err => {
					console.log(err)
				})
		}		
	}

	const removeAttrFromDatabase = (id, name) => {
		let countGroups = 0
		let canRemove = true
		Object.keys(groupsFromDB).map((group) => {
			if(groupsFromDB[group].attributes.includes(name)){
				canRemove = false
				countGroups++
			}
		})	

		if (countGroups > 0){
			alert("Can't remove. This attribute include in " + countGroups + " groups")
		}

		if(canRemove){
			database
				.ref('/attributes')
				.child(id)
				.remove()
		}		
	}

	const editAttrFromDatabase = (id) => {
		setEditVariants(simpleAttributes[id].variants)
		setIdVariants(id)
		setTimeout(()=>{
			var scrollingElement = (document.scrollingElement || document.body)
			scrollingElement.scrollTop = scrollingElement.scrollHeight
		}, 100)
		
	}

    return (
        <div className="col-md-9">
				<div className="row">
					<div className="content-body">
						<div className="panel-heading">
							<div className="col-6">
								<div className="row">
									<h3 className="panel-title">Attributes List</h3>
								</div>
							</div>
						</div>
						<div className="panel-body">
							<table className="table table-striped table-bordered table-list">
								<thead>
									<tr>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Variants</th>
                                        <th>Filtered</th>
                                        <th></th>
									</tr>
								</thead>
								<tbody>
									{
										data.attributes.map((item, index)=> {
											return(
												<tr key={index.toString()}>
													<td>{item.label}</td>
													<td>{item.type}</td>
													<td></td>
													<td></td>
													<td></td>	
												</tr>
											)
										})
									}
									{
										simpleAttributes &&
											Object.keys(simpleAttributes).map((id, index)=> {
												return(
													<tr key={index.toString()}>
														<td>{simpleAttributes[id].name}</td>
														<td>{simpleAttributes[id].type}</td>
														<td>
															<ul>
																{
																	simpleAttributes[id].variants &&
																		Object.keys(simpleAttributes[id].variants).map((variant, index) => (
																			<li key={index.toString()}>{simpleAttributes[id].variants[variant]}</li>
																		))
																}
															</ul>
														</td>
														<td>
															<Checkbox
																checked={simpleAttributes[id].filtered ? simpleAttributes[id].filtered : false} 
																onChange={(isAgreementChecked, e) => {
																	database.ref('/attributes/' + id).child('filtered').set(isAgreementChecked)
																}} 
																labelHtml={
																	<div style={{ color: '#4a4a4a', marginTop: '2px' }}>
																		Check if filtered
																	</div>
																} 
																validationOption={{
																	required: false
																}}
															/>
														</td>
														<td>
															<button onClick={()=>{removeAttrFromDatabase(id, simpleAttributes[id].name)}}>X</button>
															
															{
																simpleAttributes[id].type == 'radio' &&
																	<button onClick={()=>{editAttrFromDatabase(id)}}>Edit Variants</button>
															}
														</td>
													</tr>
												)
											})
									}
									{
										newOptionVisible && (
											<tr>
												<td>
													<Textbox 
														type="text"
														className="form-control"
														name="name_new"
														onChange={(val, e) => {
															setNameOption(val)
														}}
														onBlur={() => {}}
														classNameInput="ama_input_validate"
														classNameContainer="ama_input_container"
														classNameWrapper="ama_input_wrapper"
														value={nameOption}
														placeholder="Enter name of option"
													/>
												</td>
												<td>
													<Select 
														placeholder="Choose type" 
														options={types} 
														onChange={e => {
															setTypeOption(e.value)
															if(e.value === 'radio'){
																setVariantsOption(true)
															} else {
																setVariantsOption(false)
															}
														}}
													/>
												</td>
												<td>
													<button onClick={()=>{
														saveAttributeToBase()
													}}>Save</button>
													<button onClick={()=>{
														addOrRemoveItem([''])
														setNewOptionVisible(false)
														setVariantsOption(false)
													}}>Cancel</button>
												</td>													
											</tr>
										)
									}
									{ 
										variantsOption && 												
											optionsArray.map(function(item, index){
												return (
													<tr key={index.toString()}>
														<td>Enter variants --></td>
														<td>
															{
																index == optionsArray.length - 1 ?																
																	<Textbox 
																		type="text"
																		className="form-control"
																		name="name_new"
																		onChange={(val, e) => {	
																			addOrRemoveItem(prevOptionsArray => {
																				prevOptionsArray[index] = val
																				return prevOptionsArray
																			})		
																		}}
																		onBlur={() => {}}
																		classNameInput="ama_input_validate"
																		classNameContainer="ama_input_container"
																		classNameWrapper="ama_input_wrapper"
																		value={item}
																		placeholder="Enter variant"
																	/>
																: 
																	<p>{item}</p>
															}
														</td>
														<td>
															{
																index == optionsArray.length - 1 && (
																	<div>
																		<button onClick={()=>{
																			if(optionsArray[index].length > 2){
																				addOrRemoveItem([...optionsArray, ''])
																			}
																		}}>+</button>
																		<button onClick={()=>{
																			addOrRemoveItem([''])
																		}}>Clear</button>
																	</div>
																)
																	
															}
															
														</td>
													</tr>
												)
											})
									}
									{ 
										editVariants != null && 												
											(
												<div>
													{
														editVariants.map(function(item, index){
															return (
																<tr key={index.toString()}>
																	<td>Your variant --></td>
																	<td>															
																		<Textbox 
																			type="text"
																			className="form-control"
																			name="name_new"
																			onChange={(val, e) => {	
																				setEditVariants(prevOptionsArray => {
																					prevOptionsArray[index] = val
																					return prevOptionsArray
																				})		
																			}}
																			onBlur={() => {}}
																			classNameInput="ama_input_validate"
																			classNameContainer="ama_input_container"
																			classNameWrapper="ama_input_wrapper"
																			value={item}
																			placeholder="Enter variant"
																		/>
																	</td>
																	<td>
																		{
																			<button onClick={()=>{
																				setEditVariants(prevOptionsArray => {
																					prevOptionsArray.splice(index, 1)
																					return prevOptionsArray
																				})
																			}}>-</button>																	
																		}
																	</td>															
																</tr>
															)
														})
													}
													<div>
														<button onClick={()=>{
															setEditVariants(prevOptionsArray => {
																prevOptionsArray.push('')
																return prevOptionsArray
															})
														}}>
															+
														</button>

														<button onClick={()=>{
															database
																.ref('/attributes/' + idVariants)
																.child('variants')
																.set(editVariants)
																.then(()=>{
																	setEditVariants(null)
																})
														}}>
															Save Changes
														</button>

														<button onClick={()=>{
															setEditVariants(null)
														}}>
															Cancel
														</button>
													</div>
												</div>
											)
									}
								</tbody>
							</table>
							<button onClick={()=>{setNewOptionVisible(true)}}>Add New Option</button>
						</div>
					</div>
				</div>
			</div>
    )
}

export default Attributes