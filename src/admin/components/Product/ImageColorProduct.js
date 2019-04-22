import React, { Component } from 'react'
import { database } from '../../../firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'

export default class ImageColorProduct extends Component {
	render() {
		return (
			<div>
				<div className="imagecolorproduct">
					<div className="form-group">
						<label>Images color</label>
						<div className="allimagecolorproduct" />
					</div>
					<div className="form-group">
						<CustomUploadButton />
					</div>
				</div>
			</div>
		)
	}
}
