import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Notification from 'Components/Notification'

const Notifications = ({ messages }) => <div>
    {messages.map(message => <Notification message={message} />)}
</div>

Notifications.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = state => ({
    messages: state.notifications.unread,
})

export default connect(mapStateToProps)(Notifications)