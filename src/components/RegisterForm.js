import React, { Component } from 'react'
import { Form, Button } from 'bootstrap-4-react'

export default class RegisterForm extends Component {
	alreadyUserFunction = () => {
		this.props.updateAuthForm(true)
	}

	render() {
		return (
			<>
<<<<<<< HEAD
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
				</Form>
=======
				<form>
					<input type="text" name="username" placeholder="Username" onChange={this.props.handleChange} />
					<input type="email" name="email" placeholder="Email Address" onChange={this.props.handleChange} />
					<input type="password" name="password" placeholder="Password" onChange={this.props.handleChange} />
					<input type="password" name="passwordConfirmation" placeholder="Password Confirmation" onChange={this.props.handleChange} />
					<button type="submit">Sign up</button>
				</form>
>>>>>>> ffbc818e96b58d3b30ebb20aa440b70d43126666
				<p>
					Already user? <span onClick={this.alreadyUserFunction}>Login</span>
				</p>
			</>
		)
	}
}
