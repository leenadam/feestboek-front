import React, { Component } from 'react'
import { connect } from 'react-redux'

import { match } from './router'
import Notifications from 'Components/Notifications'
import './App.css'

class App extends Component {
  render() {
    const { route, params } = match(this.props.location.pathname)
    const Page = route.page

    return (
      <main>
        <Page {...params} />
        <Notifications />
      </main>
    );
  }
}

//<pre id="redux-state">{JSON.stringify(this.props.state, null, 2)}</pre>

const mapStateToProps = state => ({
  location: state.location,
  state,
})

export default connect(mapStateToProps)(App);
