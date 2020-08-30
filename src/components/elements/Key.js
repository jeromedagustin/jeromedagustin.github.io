import React from 'react';
import PropTypes from 'prop-types';

const Key = props => {
    const { color, disabled, onClick, size } = props

    return <div className="tic-key" onClick={onClick}></div>
}

export default Key

Key.propTypes = {
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string,
}

Key.defaultProps ={
    color: 'white',
    disabled: false,
    size: 'md',
}