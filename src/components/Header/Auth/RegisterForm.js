import React, { Component } from 'react'
import { Form, Button } from 'bootstrap-4-react'
import { auth, database } from '../../../firebase'
import { connect } from 'react-redux'
import { openAuthModal, changeAuthForm } from '../../../redux/actions'

class RegisterForm extends Component {
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
			error = { message: 'заповніть всі поля' }
			this.setState({ errors: errors.concat(error) })
			return false
		} else if (!this.isPasswordValid(this.state)) {
			error = { message: 'паролі не співпадають' }
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
								console.log(`пользователь сохранен`)
							})
							this.props.openAuthModal()
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

	static mapDispatchToProps = dispatch => {
		return {
			openAuthModal: () => dispatch(openAuthModal()),
			changeAuthForm: () => dispatch(changeAuthForm())
		}
	}

	render() {
		const { username, password, passwordConfirmation, email, errors } = this.state

		return (
			<div className="form_reg">
				<div>
					<Form onSubmit={this.handleSubmit}>
						<Button primary type="button" className="closed_ath" onClick={this.props.openAuthModal}>
							X
						</Button>
						<Form.Group>
							<Form.Input type="text" name="username" placeholder="Логін" className="input_ath" onChange={this.handleChange} value={username} />
						</Form.Group>
						<Form.Group>
							<Form.Input type="email" name="email" placeholder="Еmail" className="input_ath" onChange={this.handleChange} value={email} />
						</Form.Group>
						<Form.Group>
							<Form.Input type="password" name="password" placeholder="Пароль" className="input_ath" onChange={this.handleChange} value={password} />
						</Form.Group>
						<Form.Group>
							<Form.Input type="password" name="passwordConfirmation" className="input_ath" placeholder="Повторити пароль" onChange={this.handleChange} value={passwordConfirmation} />
						</Form.Group>
						<Button primary type="submit" className="login_btn">
							Реєстрація
						</Button>
					</Form>
					{errors.length > 0 && (
						<div>
							<h3>Помилка</h3>
							{this.displayErrors(errors)}
						</div>
					)}
					<div className="login_reg_block">
						<span className="login_reg" onClick={this.props.changeAuthForm}>
							Вхід
						</span>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(
	null,
	RegisterForm.mapDispatchToProps
)(RegisterForm)
