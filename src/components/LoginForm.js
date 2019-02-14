import React, { Component } from 'react'
import { Form, Button } from 'bootstrap-4-react'
export default class LoginForm extends Component {
	alreadyUserFunction = () => {
		this.props.updateAuthForm(false)
	}

	render() {
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
						<Button primary type="">
							Close
						</Button>
					</Form>

					<p>
						Haven't account? <span onClick={this.alreadyUserFunction}>Register</span>
					</p>
				</div>
			</div>
		)
	}
}
