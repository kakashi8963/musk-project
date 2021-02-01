export const toggleCartHidden = ()=>({
    type:'TOGGLE_CART_HIDDEN'
});

export const addItem = (item)=>({
    type:'ADD_ITEM',
    payload:item
});

export const clearItemFromCart = item =>({
type:'CLEAR_ITEM',
payload:item
});

export const decreaseItemFromCart = item =>({
    type:'DECREASE_ITEM',
    payload:item
    });