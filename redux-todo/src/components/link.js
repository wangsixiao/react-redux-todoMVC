import React from 'react'
import PropTypes from 'prop-types'
const Link = ({ active, children, onClick }) => (
    <li>
        <a 
            className={active ? "selected" : ''} 
            href="javascript:void(0)" 
            onClick={onClick}
        >
            {children}
        </a>
    </li>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
