import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'
import Switch from 'react-flexible-switch'
import uuid from 'uuid/v4'
import { adminData } from './Admin';
import { database } from '../../firebase'
import Loadable from 'react-loadable'
import Select from 'react-select'


import TopPanes from '../components/Product/TopPanes'



const LoadColor = Loadable({
	loader: () => import('../components/Product/Color'),
	loading: () => null
})

const LoadGender = Loadable({
	loader: () => import('../components/Product/Gender'),
	loading: () => null
})


const saveToBase = (data) => {	
	return database
		.ref('/products')
		.child(uuid())
		.set(data)
		.then(() => {
			window.location.href = '/admin/products'
		})
		.catch(err => {
			console.log(err)
		})
}


const AddProduct = () => {

	const data = useContext(adminData)
	const product = data.newProduct

	const [colorStatus, setColor] = useState(false)
	const [genderStatus, setGender] = useState(false)



	const create = {
		
		color: () => {
			product['color'] = ''
			setColor(true)
		},

		gender: () => {
			product['gender'] = ''
			setGender(true)
		}
	}

	const remove = {
		color: () => {
			delete product.color
			setColor(false)
		},

		gender: () => {
			delete product.gender
			setGender(false)
		}
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

						<TopPanes/>

						
						{colorStatus && (
							<>
								<span className="delete_property col-lg-1" onClick={()=>{remove.color()}}>X</span>
								<LoadColor isProperty={true}/>
							</>
						)}
						{genderStatus && (
							<>
								<span className="delete_property col-lg-1" onClick={()=>{remove.gender()}}>X</span>
								<LoadGender isProperty={true}/>
							</>
						)}

						<Select
							value=""
							placeholder="Add Option"
							onChange={e => {
								create[e.value]()
							}}
							options={data.systemAttributes}
							className="col-lg-4"
						/>

					</div>
				</div>
			</div>
		</>
	)
}


export default AddProduct
