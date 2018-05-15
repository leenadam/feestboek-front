import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

import Link from 'Components/Link'
import LogoutButton from 'Components/LogoutButton';

const Nav = ({ dispatch, username, loggedIn }) => {
    const userLinks = loggedIn ?
        [
            <Link to="/profile">Profile</Link>,
            <LogoutButton onLogout={() => dispatch(push("/"))} />,
        ] : [
            <Link to="/register">Register</Link>,
            <Link to="/login">Login</Link>,
        ]

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            {userLinks}
        </nav>
    )
}

const mapStateToProps = state => ({
    loggedIn: state.user.loggedIn,
    username: state.user.loggedIn ? state.user.profile.username : '',
})

export default connect(mapStateToProps)(Nav)
