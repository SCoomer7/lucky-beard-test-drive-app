import React from 'react';
import PropTypes from 'prop-types';

// Image for reusable use with the destructured props that can be used dynamically on multiple components on web application.
 const Image = ({className, src, alt, onClick}) => {
  return (
    <img 
    className={className}
    src={src}
    alt={alt}
    onClick={onClick}
    />

  )
}

Image.defaultProps = {
  alt: "Image Placeholder"
}

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    onClick: PropTypes.func
}

export default Image;
