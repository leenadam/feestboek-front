import React from 'react'
import {connect} from 'react-redux'
import { logout } from 'store/user'

const LogoutButton = ({ dispatch }) => (
    <button onClick={() => dispatch(logout())}>
        Log out
    </button>
)

export default connect()(LogoutButton)
