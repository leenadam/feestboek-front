import React from 'react'
import { connect } from 'react-redux'

import { addNotification } from 'store/notifications'

const AboutView = ({ hello }) => (
  <main>
    <h1>The Contact page</h1>
    <button onClick={hello}>hello</button>
  </main>
)

const mapDispatchToProps = dispatch => ({
  hello: () => dispatch(addNotification('Contact page!')),
})

export default connect(null, mapDispatchToProps)(AboutView)
