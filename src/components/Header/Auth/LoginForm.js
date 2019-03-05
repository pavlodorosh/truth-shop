import React, { Component } from 'react'
import { Form, Button } from 'bootstrap-4-react'
import { connect } from 'react-redux'
import { openAuthModal, changeAuthForm } from '../../../redux/actions'
import { auth } from '../../../firebase'

class LoginForm extends Component {
	state = {
		password: '',
		email: '',
		errors: []
	}

	componentDidMount() {
		auth.signOut()
	}

	displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>)

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmit = event => {
		event.preventDefault()
		if (this.isFormValid(this.state)) {
			this.setState({ errors: [] })
			auth.signInWithEmailAndPassword(this.state.email, this.state.password)
				.then(signedUser => {
					console.log(`вход выполнен`)
					this.props.openAuthModal()
				})
				.catch(err => {
					console.log(err)
					this.setState({
						errors: this.state.errors.concat(err)
					})
				})
		}
	}

	isFormValid = ({ email, password }) => {
		return email && password
	}

	render() {
		const { password, email } = this.state

		return (
			<div className="form_log">
				<div>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group>
							<label>Email address</label>
							<Form.Input type="email" name="email" placeholder="Enter email" onChange={this.handleChange} value={email} />
						</Form.Group>
						<Form.Group>
							<label>Password</label>
							<Form.Input type="password" name="password" placeholder="Password" onChange={this.handleChange} value={password} />
						</Form.Group>

						<Button primary type="button" onClick={this.handleSubmit}>
							Sign in
						</Button>
						<Button primary type="button" onClick={this.props.openAuthModal}>
							Close
						</Button>
					</Form>
					{this.state.errors.length > 0 && (
						<div>
							<h3>Error</h3>
							{this.displayErrors(this.state.errors)}
						</div>
					)}
					<p>
						Haven't account? <span onClick={this.props.changeAuthForm}>Register</span>
					</p>
				</div>
			</div>
		)
	}

	static mapDispatchToProps = dispatch => {
		return {
			openAuthModal: () => dispatch(openAuthModal()),
			changeAuthForm: () => dispatch(changeAuthForm())
		}
	}
}

export default connect(
	null,
	LoginForm.mapDispatchToProps
)(LoginForm)
