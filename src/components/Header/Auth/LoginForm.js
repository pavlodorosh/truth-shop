import React, { Component } from 'react'
import { Form, Button } from 'bootstrap-4-react'
export default class LoginForm extends Component {
	state = {
		password: '',
		email: '',
		errors: []
	}
	alreadyUserFunction = () => {
		this.props.updateAuthForm(false)
	}

	displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault()
		if (this.isFormValid()) {
			this.setState({ errors: [] })
		}
	}

	render() {
		// const { password, email, errors } = this.state

		return (
			<div className="form_log">
				<div>
					<Form>
						<Form.Group>
							<label>Email address</label>
							<Form.Input type="email" name="email" placeholder="Enter email" onChange={this.props.handleChange} />
						</Form.Group>
						<Form.Group>
							<label>Password</label>
							<Form.Input type="password" name="password" placeholder="Password" onChange={this.props.handleChange} />
						</Form.Group>

						<Button primary type="submit">
							Sign in
						</Button>
						<Button primary>Close</Button>
					</Form>

					<p>
						Haven't account? <span onClick={this.alreadyUserFunction}>Register</span>
					</p>
				</div>
			</div>
		)
	}
}
