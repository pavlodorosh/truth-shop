import React, { Component } from 'react'
import { Form, Button } from 'bootstrap-4-react'

export default class RegisterForm extends Component {
	alreadyUserFunction = () => {
		this.props.updateAuthForm(true)
	}

	render() {
		return (
			<div className="form_reg">
				<div>
					<Form>
						<Form.Group>
							<label>Username</label>
							<Form.Input type="text" name="username" placeholder="Username" onChange={this.props.handleChange} />
						</Form.Group>
						<Form.Group>
							<label>Email address</label>
							<Form.Input type="email" name="email" placeholder="Enter email" onChange={this.props.handleChange} />
						</Form.Group>
						<Form.Group>
							<label>Password</label>
							<Form.Input type="password" name="password" placeholder="Password" onChange={this.props.handleChange} />
						</Form.Group>
						<Form.Group>
							<label>Password Confirmation</label>
							<Form.Input type="password" name="passwordConfirmation" placeholder="Password Confirmation" onChange={this.props.handleChange} />
						</Form.Group>
						<Button primary type="submit">
							Sign up
						</Button>
						<Button primary type="">
							Close
						</Button>
					</Form>
					<p>
						Already user? <span onClick={this.alreadyUserFunction}>Login</span>
					</p>
				</div>
			</div>
		)
	}
}
