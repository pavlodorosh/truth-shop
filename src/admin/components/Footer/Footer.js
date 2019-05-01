import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-6">
						<span className="float-md-left d-block d-md-inline-block">Copyright © 2019 All rights reserved.</span>
					</div>
					<div className="col-md-6">
						<span className="float-md-right d-block d-md-inline-blockd-none d-lg-block">TRUTH TRAINING</span>
					</div>
				</div>
			</div>
		)
	}
}
