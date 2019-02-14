import React, { Component } from 'react'
import Modal from 'react-modal'

import '../css/Auth.css'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const elementForModal = document.createElement('div')

const customStyles = {
	overlay: {
		background: 'transparent',
		position: 'absolute',
		top: '68px',
		right: '40px'
	}
}

export default class AuthModal extends Component {
	state = {
		isUser: true
	}

	getParent() {
		return document.querySelector('#root')
	}

	updateAuthForm = value => {
		this.setState({
			isUser: value
		})
	}

	render() {
		const { isUser } = this.state

		return (
			<>
				<Modal isOpen={this.props.modalIsOpen} className="user-modal" parentSelector={this.getParent} appElement={elementForModal} style={customStyles}>
					{isUser ? (
						<LoginForm handleChange={this.handleChange} updateAuthForm={this.updateAuthForm} />
					) : (
						<RegisterForm handleChange={this.handleChange} updateAuthForm={this.updateAuthForm} />
					)}
				</Modal>
			</>
		)
	}
}
