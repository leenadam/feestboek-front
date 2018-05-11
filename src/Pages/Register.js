import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

import RegisterForm from 'Components/RegisterForm'

const Register = ({ dispatch }) => (
    <main>
        <h1>Register</h1>
        <p>Welcome to the Feestboek!</p>
        <ul>
            <li>All data on the Feestboek is encrypted using <code>tweetnacl-js</code>.</li>
            <li>Your private key is encrypted with a password before it is stored on the server.</li>
            <li>Choose a LONG password (a full sentence works).</li>
            <li>We can not restore your access if you forget your password.</li>
        </ul>
        <p>Feestboek is currently is closed beta, you need an invitation code to join.</p>
        <RegisterForm onRegister={() => dispatch(push("/profile"))} />
    </main>
)

export default connect()(Register)
