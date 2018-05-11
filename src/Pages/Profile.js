import React from 'react'
import { connect } from 'react-redux'

import DeregisterForm from 'Components/DeregisterForm'

const Profile = ({ dispatch }) => (
    <main>
        <h1>Profile</h1>
        <h1>Delete account</h1>
        <DeregisterForm />
    </main>
)

export default connect()(Profile)
