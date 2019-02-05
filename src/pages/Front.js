import React, { Component } from 'react'

class Front extends Component {
	render() {
		return (
			<div>
				<div className="content" />
				<style jsx>{`
					.content {
						background: red;
						height: 200px;
						width: 200px;
						display: block;
					}
				`}</style>
			</div>
		)
	}
}

export default Front
