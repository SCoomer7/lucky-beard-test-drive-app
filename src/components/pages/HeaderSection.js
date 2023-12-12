import React from 'react';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import './styles/HeaderSection.css';

// "Header Banner Section" for reusable use with the destructured props that can be used dynamically on "Home.js" component.
// "scrollToSection" functions passed down from teh APP.js which then can be used in the arrow button.
 const HeaderSection = ({scrollToSection}) => {
  return (
      <section className="centered-container">
        <Stack gap={3} className="text-center">
          <div className="p-2">
            <p className='header-texts'>A new era for test-drives</p>
          </div>
          <div className="p-2">
            <p className='header-description'>Enhanced test drive experience through the connection of people in a secure, scheduled and convenient manner to ensure the seamless buying and selling of new and used vehicles. </p>
          </div>
          <div className='store-row'>
            <Col xs lg="1">
              <Image className="store-image-apple" src="./images/app-store-logo.png" />
            </Col>
            <Col xs lg="1">
              <Image  className="store-image-play" src="./images/google-play-store.png" />
            </Col>
          </div>
        <div>
          <Image className={'arrow-button'} src="./images/button-arrow.png" onClick={() => scrollToSection('section-1')} />
        </div>
        </Stack>
      </section>
  )
}

export default HeaderSection;
