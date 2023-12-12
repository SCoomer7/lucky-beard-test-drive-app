import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './styles/ImageCard.css';

// ImageCard for reusable use with the destructured props that can be used dynamically on multiple components on web application.
const ImageCard = ({ image,heading, description }) => {
  return (
    <Card className='card'>
      <Card.Img className='image-card' variant="top" src={image} alt={heading}/>
      <Card.Body>
        <Card.Title className='card-title'>{heading}</Card.Title>
        <Card.Text className='card-text'>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

ImageCard.defaultProps = {
  image: "Image Placeholder",
  heading:"This is a heading",
  description:"This is a description",
}

ImageCard.propTypes = {
    image: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
}

export default ImageCard;
