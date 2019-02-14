import React, { Component } from 'react'

export default class LoginForm extends Component {
	alreadyUserFunction = () => {
		this.props.updateAuthForm(false)
	}

	render() {
		return (
			<>
				<form>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button type="submit">Sign in</button>
				</form>

				<p>
					Haven't account? <span onClick={this.alreadyUserFunction}>Register</span>
				</p>
			</>
		)
	}
}
