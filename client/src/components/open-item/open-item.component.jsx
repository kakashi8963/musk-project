import React from 'react';
import {connect} from 'react-redux';
import './open-item.styles.scss';
import {createStructuredSelector} from 'reselect';
import { selectItem } from '../../redux/shop/shop.selectors';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

const OpenItem =({item,addItem}) => {
    const{name,imageUrl,price} =item;
    return(
        <div>
            <div className='name'>{name}</div>
            <img className='image' src={imageUrl}
           />
<CustomButton onClick={()=> addItem(item)} >Add To Cart</CustomButton>
            <div className='footer' >PRICE: {price} Rs </div>

        </div>
    );
};

const mapStateToProps =(state,ownprops) => ({
item: selectItem(ownprops.match.params.collectionId,ownprops.match.params.id)(state)
}
);

const mapDispatchToProps =dispatch =>({
    addItem: item=> dispatch(addItem(item))
});

export  default connect(mapStateToProps,mapDispatchToProps)(OpenItem);