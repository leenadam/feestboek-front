import React from 'react'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

const Link = ({ to, dispatch, children }) => (
    <button onClick={() => dispatch(push(to))}>
        {children}
    </button>
)

export default connect()(Link)
