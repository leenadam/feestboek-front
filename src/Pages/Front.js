import React from 'react'
import { connect } from 'react-redux'

import Link from 'Components/Link'

const FrontView = ({ hello }) => (
    <div>
        <h1>The front page</h1>
        <Link to="/about">Goto about</Link>
    </div>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FrontView)
