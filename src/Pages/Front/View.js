import React from 'react'
//import PropTypes from 'prop-types'
import Link from 'Components/Link'
import { addNotification } from 'store/notifications'
import { connect } from 'react-redux'

class FrontView extends React.PureComponent {
    render() {
        const handler = () => {
            this.props.dispatch(addNotification({
                id: Math.random(),
                content: 'yay',
            }))
        }

        return (
            <div>
                <h1>The front page</h1>
                <Link to="/about">Goto about</Link>
                <button onClick={handler}>notify</button>
            </div>
        )
    }
}

FrontView.propTypes = {
}

export default connect()(FrontView)
