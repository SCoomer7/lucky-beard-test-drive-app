import React from 'react';
import {useSelector} from 'react-redux';
import Stack from 'react-bootstrap/Stack';
import './styles/FooterBanner.css';
import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard';
import { selectAllImageCards } from '../../features/ImageCard/imageCardSlice';

// "Footer Banner" for reusable use with the destructured props that can be used dynamically on "Home.js" component.
 const FooterBanner = () => {
// This is the data brought in from the redux state "ImageCard.js" then mapped through ImageCard component.
  const cardData = useSelector(selectAllImageCards)

  return (
    <section className="centered-container-footer">
        <Stack gap={3}>
            <div className="p-2">
                <p className='footer-text'>Private seller?<br/>We got your back</p>
            </div>
            <div className="p-2">
                <p className='footer-description'>Want to sell your current car? Put it on Dealer, schedule appointments and take advantage of our integrated financing engine. </p>
            </div>
        </Stack>
        <Container className='card-container'>
          <Row xs={1} md={2} lg={6} className="g-4">
            {cardData.map((data, id) => (
              <Col key={id}>
                <ImageCard {...data} />
              </Col>
            ))}
          </Row>
        </Container>
    </section>
  )
}

export default FooterBanner;
