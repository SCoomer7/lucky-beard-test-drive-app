import React from 'react';
import PropTypes from 'prop-types';

// Section for reusable use with the destructured props that can be used dynamically on multiple components on web application.
 const Section = ({className,children}) => {
  return (
        <section className={className}>
            {children}
        </section>
  )
}

Section.propTypes = {
    className: PropTypes.string,
    children: PropTypes.array,
}

export default Section;
