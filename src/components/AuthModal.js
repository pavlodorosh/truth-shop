import React, { Component } from 'react'
import Modal from 'react-modal'

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const elementForModal = document.createElement('div')

export default class AuthModal extends Component {
	getParent() {
		return document.querySelector('#root')
	}

	handleChange = () => {}

	render() {
		return (
			<>
				<Modal isOpen={this.props.modalIsOpen} className="user-modal" parentSelector={this.getParent} appElement={elementForModal}>
					<RegisterForm handleChange={this.handleChange} />
				</Modal>
			</>
		)
	}
}
