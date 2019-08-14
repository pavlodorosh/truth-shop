import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Textbox } from 'react-inputs-validation'
import { adminData } from './Admin'

const AddAttributesGroup = () => {
    const data = useContext(adminData)

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
                            <button>Save</button>
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
                                data.newAttributeGroup.name = val		
                            }}
                            onBlur={() => {}}
                            classNameInput="ama_input_validate"
                            classNameContainer="ama_input_container"
                            classNameWrapper="ama_input_wrapper"
                            value={ data.newAttributeGroup.name}
                            placeholder="Enter name"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddAttributesGroup
