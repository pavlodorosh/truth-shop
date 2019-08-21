import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Textbox, Checkbox } from 'react-inputs-validation'
import { adminData } from './Admin'
import { database } from '../../firebase'
import uuid from 'uuid/v4'

const AddAttributesGroup = ({ history }) => {
    const data = useContext(adminData)

    
    const [simpleAttributes, getAttributes] = useState(null)
    const [attributesGroup, addOrRemoveAttribute] = useState([])
    const [nameGroup, setNameGroup] = useState('')
    
    useEffect(()=>{
		database.ref('/attributes').on('value', snapshot => {
			getAttributes(snapshot.val())			
		})
    })

    const saveGroupToBase = () => {
        if(nameGroup.length > 1 && attributesGroup.length > 1){
            return database
                .ref('/groups')
                .child(nameGroup + uuid())
                .set({
                    name: nameGroup,
                    attributes: attributesGroup
                })
                .then(() => {
                    history.push('/admin/groups')
                })
                .catch(err => {
                    console.log(err)
                })
        }        
	}
    

    return (
        <div className="col-md-9">
            <div className="row">
                <div className="content-body">
                    <div className="panel-heading">
                        <div className="col-6">
                            <div className="row">
                                <h3 className="panel-title">Add Attribute Group</h3>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <button onClick={saveGroupToBase}>Save</button>
                        </div>
                        <div className="col-md-2">
                            <Link to="/admin/groups">
                                <button>Cancel</button>
                            </Link>
                        </div>
                    </div>
                    <div className="panel-body">
                        <Textbox 
                            type="text"
                            className="form-control"
                            name="name_new"
                            onChange={(val, e) => {	
                                setNameGroup(val)		
                            }}
                            onBlur={() => {}}
                            classNameInput="ama_input_validate"
                            classNameContainer="ama_input_container"
                            classNameWrapper="ama_input_wrapper"
                            value={nameGroup}
                            placeholder="Enter name"
                        />
                        <h4>Mark the required components</h4>
                        {
                            data.attributes.map((el)=>{
                                return (
                                    <Checkbox
                                        id={el.name}
                                        name={el.name}
                                        value={el.name}
                                        onBlur={() => {}}
                                        classNameInput="ama_input_validate"
                                        classNameContainer="ama_input_container"
                                        classNameWrapper="ama_input_wrapper"
                                        onChange={(is, e) => {
                                            if(is){
                                                addOrRemoveAttribute(prevOptionsArray => {
                                                    prevOptionsArray.push(el.name)
                                                    return prevOptionsArray
                                                })
                                            } else {
                                                addOrRemoveAttribute(prevOptionsArray => {
                                                    prevOptionsArray = prevOptionsArray.filter((value) => {
                                                        return value != el.name
                                                    })
                                                    return prevOptionsArray
                                                })
                                            }
                                        }}
                                        labelHtml={
                                            <div style={{ color: '#4a4a4a', marginTop: '2px' }}>
                                                {el.label}
                                            </div>
                                        }
                                        validationOption={{
                                            check: false, 
                                            required: false, 
                                        }}
                                    />
                                )
                            })
                        }
                        {
                            simpleAttributes &&
                                Object.keys(simpleAttributes).map((el)=>{
                                    return (
                                        <Checkbox
                                            id={simpleAttributes[el].label}
                                            name={simpleAttributes[el].label}
                                            value={simpleAttributes[el].label}
                                            onBlur={() => {}}
                                            classNameInput="ama_input_validate"
                                            classNameContainer="ama_input_container"
                                            classNameWrapper="ama_input_wrapper"
                                            onChange={(is, e) => {
                                                if(is){
                                                    addOrRemoveAttribute(prevOptionsArray => {
                                                        prevOptionsArray.push(simpleAttributes[el].label)
                                                        return prevOptionsArray
                                                    })
                                                } else {
                                                    addOrRemoveAttribute(prevOptionsArray => {
                                                        prevOptionsArray = prevOptionsArray.filter((value) => {
                                                            return value != simpleAttributes[el].label
                                                        })
                                                        return prevOptionsArray
                                                    })
                                                }
                                            }}
                                            labelHtml={
                                                <div style={{ color: '#4a4a4a', marginTop: '2px' }}>
                                                    {simpleAttributes[el].label}
                                                </div>
                                            }
                                            validationOption={{
                                                check: false, 
                                                required: false, 
                                            }}
                                        />
                                    )
                                })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAttributesGroup
