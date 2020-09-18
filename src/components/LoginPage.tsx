import React from 'react'
import {
  StyledLoginForm,
  StyledLoginPage,
  StyledWelcomeContainer,
} from '../styles/LoginPage'
import '../assets/css/styles.css'

const WelcomeContainer: React.FC = () => {
  return (
    <StyledWelcomeContainer>
      <img src='/images/logo.png' alt='Addis Software Logo' />
      <div>
        <span>Employee Management</span>
        <span>A test employee management project</span>
      </div>
    </StyledWelcomeContainer>
  )
}

const LoginForm: React.FC = () => {
  return (
    <StyledLoginForm>
      <div>Login to your account</div>
      <form>
        <label>Email address</label>
        <input type='text' />
        <label>Password</label>
        <input type='password' />
        <button> LOGIN </button>
      </form>
      <div>
        <h6> Use this to login</h6>
        <h6>email: admin@addissot.com</h6>
        <h6>password: 4321</h6>
      </div>
    </StyledLoginForm>
  )
}

export const LoginPage: React.FC = () => {
  return (
    <StyledLoginPage>
      <WelcomeContainer />
      <LoginForm />
    </StyledLoginPage>
  )
}

export default LoginPage
