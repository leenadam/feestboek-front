import React from 'react'
//import PropTypes from 'prop-types'
import Link from '../../Components/Link'

class FrontView extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>The front page</h1>
                <Link to="/about">Goto about</Link>
            </div>
        )
    }
}

FrontView.propTypes = {
}

export default FrontView
