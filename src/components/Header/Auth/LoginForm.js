import React from 'react'
import { Form, Button } from 'bootstrap-4-react'
import { connect } from 'react-redux'
import { openAuthModal, changeAuthForm } from '../../../redux/actions'

const LoginForm = ({ openAuthModal, changeAuthForm }) => {
	return (
		<div className="form_log">
			<div>
				<Form>
					<Form.Group>
						<label>Email address</label>
						<Form.Input type="email" name="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group>
						<label>Password</label>
						<Form.Input type="password" name="password" placeholder="Password" />
					</Form.Group>

					<Button primary type="submit">
						Sign in
					</Button>
					<Button primary type="button" onClick={openAuthModal}>
						Close
					</Button>
				</Form>

				<p>
					Haven't account? <span onClick={changeAuthForm}>Register</span>
				</p>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		openAuthModal: () => dispatch(openAuthModal()),
		changeAuthForm: () => dispatch(changeAuthForm())
	}
}

export default connect(
	null,
	mapDispatchToProps
)(LoginForm)
