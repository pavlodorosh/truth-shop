import React, { Component } from 'react'
import { database } from '../../../firebase'
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton'

export default class ImageProduct extends Component {
	render() {
		return (
			<div>
				<div className="imageproduct">
					<div className="form-group">
						<label>All images</label>
						<div className="allimageproduct" />
					</div>
					<div className="form-group">
						<CustomUploadButton />
					</div>
				</div>
			</div>
		)
	}
}
