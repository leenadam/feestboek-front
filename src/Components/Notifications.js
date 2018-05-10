import React from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-transition-group'
import { markNotificationAsRead } from 'store/notifications'

const Notifications = ({ notifications, clickHandler }) => (
    <div id="notifications">
        {notifications.map(notification =>
            <Transition
                key={notification.id}
                in={!notification.read}
                timeout={150}
                unmountOnExit>
                {state =>
                    <div className={`notification ${state}`}
                        onClick={clickHandler(notification.id)}>
                        {notification.content}
                    </div>}
            </Transition>
        )}
    </div>
)

const mapStateToProps = state => ({
    notifications: state.notifications,
})

const mapDispatchToProps = dispatch => ({
    clickHandler: (id) => () => dispatch(markNotificationAsRead(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)