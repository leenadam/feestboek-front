import React from 'react'
import { connect } from 'react-redux'
import { markNotificationAsRead } from 'store/notifications'

const Notifications = ({ notifications, clickHandler }) => (
    <div id="notifications">
        {notifications.map(notification =>
            <div className="notification"
                key={notification.id}
                onClick={clickHandler(notification.id)}>
                {notification.content}
            </div>)}
    </div>
)

const mapStateToProps = state => ({
    notifications: state.notifications.unread,
})

const mapDispatchToProps = dispatch => ({
    clickHandler: (id) => () => dispatch(markNotificationAsRead(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)