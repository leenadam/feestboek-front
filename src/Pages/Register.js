import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

import RegisterForm from 'Components/RegisterForm'

const Register = ({ dispatch }) => (
    <main>
        <h1>Register</h1>
        <RegisterForm onRegister={() => dispatch(push("/profile"))} />
    </main>
)

export default connect()(Register)
