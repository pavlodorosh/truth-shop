import React, { Component } from 'react'

export default class LoginForm extends Component {
	render() {
		return (
			<>
				<form>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button type="submit">Sign in</button>
				</form>
			</>
		)
	}
}
