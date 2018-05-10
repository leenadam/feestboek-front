import React from 'react'
import { connect } from 'react-redux'

import { addNotification } from 'store/notifications'

class AboutView extends React.PureComponent {
    componentWillMount() { }

    render() {
        return (
            <div>
                <h1>The About page</h1>
                <button onClick={this.props.hello}>notify</button>
            </div>
        )
    }
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
    hello: () => {
        dispatch(addNotification('yay !! ' + Math.random()))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutView)
