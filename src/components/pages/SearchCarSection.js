import React from 'react';
import Col from 'react-bootstrap/Col';
import Image from './Image';
import './styles/SearchCarSection.css'
import ListText from './ListText';

// "Search for the car of your dreams and test drive it" for reusable use with the destructured props that can be used dynamically on "Home.js" component.
// The "ListText" & "Image" components are the reusable componets in this component.
 const SearchCarSection = () => {
  return (
    <div id="section-1" className='list-container'>
        <div className='row-list'>
        <Col className="row-column">
            <Image className={"image-phone"} src={"./images/car-phone.png"} alt={'Car Iphone'} />
        </Col>
        <Col>
            <ListText
            header='Search for the car of your dreams and test drive it'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed malesuada habitant odio eu etiam proin odio habitant. Elit felis aliquam suspendisse amet nunc. Erat.'
            list1='Multiple filtering options'
            list2='Test drives with both private sellers or dealerships'
            list3='Take pictures and notes during test drive'
            />
        </Col>
        </div>
    </div>
  )
}

export default SearchCarSection;
