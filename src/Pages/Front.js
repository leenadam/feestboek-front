import React from 'react'
import { connect } from 'react-redux'

// import Link from 'Components/Link'
// import RegisterForm from 'Components/RegisterForm'
// import LoginForm from 'Components/LoginForm'

const FrontView = ({ hello }) => (
    <main>
        <h1>Feestboek</h1>
        <ul>
            <li>How to block facebook on a dns level.</li>
            <li>How to (and why) install linux instead of windows or ios</li>
            <li>How to run kali in a virtualbox</li>
        </ul>
    </main>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FrontView)
