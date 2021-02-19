import React from 'react';
import {Link} from 'react-router-dom';
import  './menu-items.styles.scss';

const MenuItem=({title,imageUrl,linkUrl}) =>(
    <div className='menu-item'>
<div className='background-image'
style={{
    backgroundImage: `url(${imageUrl})`
}} />

                <div  className='content'>
                    <Link className ='title' to={`${linkUrl}`} >{title.toUpperCase()}</Link>
                    <Link className ='subtitle' to={`${linkUrl}`} >Shop Now</Link>
                </div>
            </div>
)

export default MenuItem;