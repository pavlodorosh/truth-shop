import React, { Component } from 'react'
import { database } from '../../../firebase'
import ImageProduct from './ImageProduct'
import ImageColorProduct from './ImageColorProduct'
import DescProduct from './DescProduct'
import AtribyteProduct from './AtribyteProduct'

export default class GropsProduct extends Component {
	render() {
		return (
			<div>
				<div className="grops_product" >
                    <div className="grop_product">
                        <div className="image_product">
                            <ImageProduct />
                        </div>
                        <div className="image_color_product">
                            <ImageColorProduct />
                        </div>
                        <div className="desc_product">
                            <DescProduct />
                        </div>
                        <div className="size_quantity_product">
                            <AtribyteProduct />
                        </div>
                    </div>
                    <button onClick={}>add..</button>
                </div>
			</div>
		)
	}
}
