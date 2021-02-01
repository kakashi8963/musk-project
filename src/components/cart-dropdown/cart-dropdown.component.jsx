import React from 'react';
import {withRouter} from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';


const CartDropdown =({cartItems,history,dispatch}) =>(
    <div className ='cart-dropdown'>
        <div className ='cart-items'>
        {cartItems.length?
        cartItems.map(
            cartItem=>(
            <CartItem key={cartItem.id} item={cartItem}/>
        ))
        :
        <span className='empty-message'>YOUR CART IS EMPTY</span>
    }
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}
    >GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}}) =>({
cartItems
});
 
export default withRouter(connect(mapStateToProps)(CartDropdown));