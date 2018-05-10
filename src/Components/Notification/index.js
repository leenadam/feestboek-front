import React from 'react'
import PropTypes from 'prop-types'
import { markNotificationAsRead } from 'store/notifications'
import { connect } from 'react-redux'

class Notification extends React.PureComponent {
    render() {
        const { dispatch, message } = this.props
        return (
            <div>
                {message.content}
                <button onClick={() => dispatch(markNotificationAsRead(message.id))}>
                    X
                </button>
            </div>
        )
    }
}

Notification.propTypes = {
    message: PropTypes.object.isRequired,
}

export default connect()(Notification)
