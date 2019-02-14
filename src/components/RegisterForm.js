import React, { Component } from 'react'
import { Form, Button } from 'bootstrap-4-react'

export default class RegisterForm extends Component {
	state = {}

	render() {
		return (
			<>
				<form className="name">
					<input type="text" name="username" placeholder="Username" onChange={this.props.handleChange} />
					<input type="email" name="email" placeholder="Email Address" onChange={this.props.handleChange} />
					<input type="password" name="password" placeholder="Password" onChange={this.props.handleChange} />
					<input type="password" name="passwordConfirmation" placeholder="Password Confirmation" onChange={this.props.handleChange} />
					<button type="submit">Sign up</button>
				</form>

				<Form>
					<Form.Group>
						<label htmlFor="exampleInputEmail1">Username</label>
						<Form.Input type="text" name="username" id="exampleInputEmail1" placeholder="Username" onChange={this.props.handleChange} />
					</Form.Group>
					<Form.Group>
						<label htmlFor="exampleInputEmail1">Email address</label>
						<Form.Input type="email" name="email" id="exampleInputEmail1" placeholder="Enter email" onChange={this.props.handleChange} />
					</Form.Group>
					<Form.Group>
						<label htmlFor="exampleInputPassword1">Password</label>
						<Form.Input type="password" name="password" id="exampleInputPassword1" placeholder="Password" onChange={this.props.handleChange} />
					</Form.Group>
					<Form.Group>
						<label htmlFor="exampleInputPassword1">Password Confirmation</label>
						<Form.Input type="password" name="passwordConfirmation" id="exampleInputPassword1" placeholder="Password Confirmation" onChange={this.props.handleChange} />
					</Form.Group>
					<Button primary type="submit">
						Sign up
					</Button>
				</Form>
			</>
		)
	}
}
