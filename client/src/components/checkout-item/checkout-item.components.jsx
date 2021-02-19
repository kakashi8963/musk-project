import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart,addItem,decreaseItemFromCart} from '../../redux/cart/cart.actions';
import './checkout-items.styles.scss';

const CheckoutItem =({cartItem,clearItem,increaseItem,decreaseItem}) =>{
    const {name,imageUrl,price,quantity} = cartItem;
 return(
    <div className ='checkout-item'>
        <div className ='image-container'>
            <img src ={imageUrl}alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className ='arrow' onClick={()=>decreaseItem(cartItem)}>   &#8722;   </div>
            <span className='value'>{quantity}</span>
            <div className ='arrow' onClick={()=>increaseItem(cartItem)}>   &#43;   </div>
            </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={()=>clearItem(cartItem)}>&#10005;</div>
    </div>
)
 };
const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    increaseItem: item =>dispatch(addItem(item)),
    decreaseItem: item=> dispatch(decreaseItemFromCart(item))
});

export default connect(null,mapDispatchToProps) (CheckoutItem);

