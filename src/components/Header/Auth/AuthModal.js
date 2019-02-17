import React from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux'
import { openAuthModal } from '../../../redux/actions'
import './Auth.css'
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

const getParent = () => {
	return document.querySelector('#root')
}

const AuthModal = ({ isAuthModalOpen, isUserExist }) => {
	return (
		<>
			<Modal isOpen={isAuthModalOpen} className="user-modal" parentSelector={getParent} appElement={elementForModal} style={customStyles}>
				{isUserExist ? <LoginForm /> : <RegisterForm />}
			</Modal>
		</>
	)
}

const mapStateToProps = state => {
	return {
		isAuthModalOpen: state.authModal,
		isUserExist: state.authModalUserFormSwitch
	}
}

const mapDispatchToProps = dispatch => {
	return {
		openAuthModal: () => dispatch(openAuthModal())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AuthModal)
