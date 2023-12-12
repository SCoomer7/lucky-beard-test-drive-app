import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './styles/PeopleSection.css'
import ListText from './ListText';

// "Only Real People Sectiopn" for reusable use with the destructured props that can be used dynamically on "Home.js" component.
// The "ListText" & "Image" components are the reusable componets in this component.
 const PeopleSection = () => {
  return (
   <div id="section-2" className='list-container'>
        <div className='row-list'>
            <Col>
                <ListText
                header='Only real people'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed malesuada habitant odio eu etiam proin odio habitant. Elit felis aliquam suspendisse amet nunc. Erat.'
                list1='Secure and verified registration'
                list2='Direct messaging with the seller'
                list3='Instant armed response if something goes wrong'
                />
            </Col>
            <Col className="row-column"> 
                <Image className="image-phone" src="./images/car-phone.png" />
            </Col>
        </div>
    </div>
  )
}

export default PeopleSection;
