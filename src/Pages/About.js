import React from 'react'
import { connect } from 'react-redux'

import { addNotification } from 'store/notifications'

const AboutView = ({ hello }) => (
    <div>
        <h1>The About page</h1>
        <button onClick={hello}>notify</button>
    </div>
)

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
    hello: () => {
        dispatch(addNotification('yay !! ' + Math.random()))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutView)
