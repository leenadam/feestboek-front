import React from 'react'
import { connect } from 'react-redux'

import Link from 'Components/Link'

const FrontView = ({ hello }) => (
    <main>
        <h1>The front page</h1>
        <Link to="/about">Goto about</Link>
    </main>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FrontView)
