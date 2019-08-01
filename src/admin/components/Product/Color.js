import React, {useState, useContext} from 'react'
import { SwatchesPicker } from 'react-color'
import { adminData } from '../../pages/Admin';


const Property = () => {
    const [pickerActive, setPickerActive] = useState(false)
    
	const data = useContext(adminData)
    const product = data.newProduct
    
    const handleChangeColorComplete = (color) => {
        product.color = color.hex
        setPickerActive(false)
    }

    return (
        <div className="col-lg-11">
            <label onClick={()=>setPickerActive(!pickerActive)}>Choose color</label>
            <span style={{ backgroundColor: product.color, width: '30px', height: '30px', display: 'inline-block' }} /> 
            {pickerActive ? <SwatchesPicker color={product.color} onChangeComplete={handleChangeColorComplete} /> : ''}
        </div>
    )
}

const GroupProperty = () => {
    return (
        <>group</>
    )
}

const Color = (props) => {
    let colorComponent

    if (props.isProperty) {
        colorComponent = <Property/>
    } else {
        colorComponent = <GroupProperty/>
    }

    return (
        <>
            {colorComponent}
        </>
    )
}

export default Color