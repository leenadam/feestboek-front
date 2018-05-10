import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'redux-first-routing'

const Link = ({ to, dispatch, children }) => (
    <button onClick={() => dispatch(push(to))}>
        {children}
    </button>
)

Link.propTypes = {
    to: PropTypes.string.isRequired,
}

export default connect()(Link)
