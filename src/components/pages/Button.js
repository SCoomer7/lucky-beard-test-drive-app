import React from 'react';
import PropTypes from 'prop-types';

// Button for reusable use with the destructured props that can be used dynamically on multiple components on web application.
 const Button = ({text,onClick, styles}) => {
  return (
    <button 
    onClick={onClick}
    className={styles}>
    {text}
    </button>
  )
}

Button.defaultProps = {
  text:"Button Text",
  styles: "btn"
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    styles: PropTypes.string,
}

export default Button;
