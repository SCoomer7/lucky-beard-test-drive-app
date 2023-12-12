import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import './styles/ListText.css';

// List section on the home page with the destructured props which is used dynamically on PeopleSection & SearchCarSection components.
 const ListText = ({header,description,list1,list2, list3}) => {
  return (
    <div>
      <p className='body-text'>{header}</p>
      <p className='body-description'>{description}</p>
      <ul className="list-with-icons">
      <li className="list-item">
        <Image className={"image-list"} src={"./images/person-icon-image.png"} alt={"Person Icon"} /> 
        {list1}
      </li>
      <li className="list-item">
        <img className={"image-list"} src={"./images/person-icon-image.png"} alt={"Person Icon"} /> 
        {list2}
      </li>
      <li className="list-item">
        <img className={"image-list"} src={"./images/person-icon-image.png"} alt={"Person Icon"} /> 
        {list3}
      </li>
      </ul> 
    </div>
  )
}

ListText.defaultProps = {
header:"Text",
description:"Description",
list1:'List Item',
list2:'List Item',
list3:'List Item',

}

ListText.propTypes = {
header:PropTypes.string,
description:PropTypes.string,
list1:PropTypes.string,
list2:PropTypes.string,
list3:PropTypes.string,
}

export default ListText;
