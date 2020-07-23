import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, match }) => {

  let history = useHistory();
  
  return (
    <div 
          className={`${size} menu-item`} 
          onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div 
          className='background-image' 
          style={{
            backgroundImage: `url(${imageUrl})`
          }} 
        />
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div> 
    </div>
)}

//withRouter gives MenuItem acccess to location, match and history
export default withRouter(MenuItem);