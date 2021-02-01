import React from 'react'
import PropTypes from 'prop-types';
export const Button = ({color, text, onClick}) => {
    
    return (
        <button 
        onClick={onClick}
        className="btn"
         style={{backgroundColor: color }} >
            {text}
        </button>
    )
}

Button.defaultProps={
    text: "Add",
    color:"yellow",
}

Button.propTypes={
    text:PropTypes.string,
    color:PropTypes.string,
}