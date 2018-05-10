import React from 'react'
import { connect } from 'react-redux'

import Link from 'Components/Link'
import LoginForm from 'Components/LoginForm'
import LogoutButton from 'Components/LogoutButton';

const FrontView = ({ hello }) => (
    <main>
        <h1>The front page</h1>
        <LoginForm />
        <LogoutButton />
        <Link to="/about">Goto about</Link>
    </main>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FrontView)
