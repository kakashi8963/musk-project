import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';
import CollectionPreview from '../preview-collection/preview-collection.component';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem =({item,collectionName,addItem})=>{
   const {name,price,imageUrl,id} =item; 
    return(
<div className='collection-item'>
    <Link to = {`/shop/${collectionName}/${id}`}
    className='image' 
    style={{
        backgroundImage: `url(${imageUrl })`
    }}
    >

    </Link>
    <div className ='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={()=>addItem(item)} inverted> ADD TO CART</CustomButton>
</div>

)};

const mapDispatchToProps =dispatch =>({
    addItem: item=> dispatch(addItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);
