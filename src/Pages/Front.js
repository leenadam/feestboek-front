import React from 'react'
import { connect } from 'react-redux'

// import Link from 'Components/Link'
import RegisterForm from 'Components/RegisterForm'
import LoginForm from 'Components/LoginForm'
import LogoutButton from 'Components/LogoutButton';

const FrontView = ({ hello }) => (
    <main>
        <h1>Register</h1>
        <RegisterForm />

        <h1>Login</h1>
        <LoginForm />

        <h1>Logout</h1>
        <LogoutButton />
    </main>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FrontView)
