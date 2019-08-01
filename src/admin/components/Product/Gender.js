import React, { useContext } from 'react'
import { Radiobox } from 'react-inputs-validation'
import { adminData } from '../../pages/Admin'


const Property = () => {
    
    const data = useContext(adminData)
    const product = data.newProduct

    return (
        <div className="detail col-sm-11">
            <div className="form-group ama_flex">
                <label><b>Gender</b></label>
                <Radiobox
                    tabIndex={0}
                    value={product.gender}
                    customStyleContainer={{
                        display: 'flex',
                        justifyContent: 'flex-start'
                    }}
                    onChange={gender => {
                        product.gender = gender
                    }}
                    onBlur={e => {
                        console.log(e)
                    }}
                    optionList={[{ id: 'male', name: 'Male' }, { id: 'female', name: 'Female' },  { id: 'unisex', name: 'Unisex' }]}
                />
            </div>
        </div>
    )
}

const GroupProperty = () => {
    return <></>
}

const Gender = (props) => {

    let genderComponent
    if (props.isProperty) {
        genderComponent = <Property/>
    } else {
        genderComponent = <GroupProperty/>
    }

    return (
        <>
            {genderComponent}
        </>
    )
}

export default Gender