import React from 'react';
import PropTypes from 'prop-types';

// Text for reusable use with the destructured props that can be used dynamically on multiple components on web application.
 const Texts = ({text,className,onClick}) => {
  return (
    <p 
    onClick={onClick}
    className={className}>
    {text}
    </p>
  )
}

Texts.defaultProps = {
  text:"Text",
  className:"text-white-50",
}

Texts.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
}

export default Texts;
