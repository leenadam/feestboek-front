import React from 'react'
import { connect } from 'react-redux'
import { Transition } from 'react-transition-group'
import { markNotificationAsRead } from 'store/notifications'

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
};

const Notifications = ({ notifications, clickHandler }) => (
    <div id="notifications">
        {notifications.map(notification =>
            <Transition
                key={notification.id}
                in={!notification.read}
                timeout={duration}
                unmountOnExit>
                {state =>
                    <div
                        onClick={clickHandler(notification.id)}
                        style={{ ...defaultStyle, ...transitionStyles[state] }}>
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
