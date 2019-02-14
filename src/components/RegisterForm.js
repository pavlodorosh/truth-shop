import React, { Component } from 'react'
import { Form, Button } from 'bootstrap-4-react'
import { auth, database } from '../firebase'

export default class RegisterForm extends Component {
	state = {
		username: '',
		password: '',
		passwordConfirmation: '',
		email: '',
		errors: [],
		usersRef: database.ref('users')
	}

	isFormValid = () => {
		let errors = []
		let error

		if (this.isFormEmpty(this.state)) {
			error = { message: 'Fill in all fields' }
			this.setState({ errors: errors.concat(error) })
			return false
		} else if (!this.isPasswordValid(this.state)) {
			error = { message: 'Password is invalid' }
			this.setState({ errors: errors.concat(error) })
			return false
		} else {
			// Ошибки нет
			return true
		}
	}

	isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
		return !username.length || !email.length || !password.length || !passwordConfirmation.length
	}

	isPasswordValid = ({ password, passwordConfirmation }) => {
		if (password.length < 6 || passwordConfirmation.length < 6) {
			return false
		} else if (password !== passwordConfirmation) {
			return false
		} else {
			return true
		}
	}

	displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)

	alreadyUserFunction = () => {
		this.props.updateAuthForm(true)
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault()
		if (this.isFormValid()) {
			this.setState({ errors: [] })
			auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
				.then(createdUser => {
					console.log(createdUser)
					createdUser.user
						.updateProfile({
							displayName: this.state.username
						})
						.then(() => {
							this.saveUser(createdUser).then(() => {
								console.log(' пользователь сохранен')
							})
						})
						.catch(err => {
							console.log(err)
							this.setState({ errors: this.state.errors.concat(err) })
						})
				})
				.catch(err => {
					console.log(err)
					this.setState({ errors: this.state.errors.concat(err) })
				})
		}
	}

	saveUser = createdUser => {
		return this.state.usersRef.child(createdUser.user.uid).set({
			name: createdUser.user.displayName,
			email: createdUser.user.email
		})
	}

	render() {
		const { username, password, passwordConfirmation, email, errors } = this.state

		return (
			<div className="form_reg">
				<div>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group>
							<label>Username</label>
							<Form.Input type="text" name="username" placeholder="Username" onChange={this.handleChange} value={username} />
						</Form.Group>
						<Form.Group>
							<label>Email address</label>
							<Form.Input type="email" name="email" placeholder="Enter email" onChange={this.handleChange} value={email} />
						</Form.Group>
						<Form.Group>
							<label>Password</label>
							<Form.Input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password} />
						</Form.Group>
						<Form.Group>
							<label>Password Confirmation</label>
							<Form.Input type="password" name="passwordConfirmation" placeholder="Password Confirmation" onChange={this.handleChange} value={passwordConfirmation} />
						</Form.Group>
						<Button primary type="submit">
							Sign up
						</Button>
						<Button primary>Close</Button>
					</Form>
					{errors.length > 0 && (
						<div>
							<h3>Error</h3>
							{this.displayErrors(errors)}
						</div>
					)}
					<p>
						Already user? <span onClick={this.alreadyUserFunction}>Login</span>
					</p>
				</div>
			</div>
		)
	}
}
