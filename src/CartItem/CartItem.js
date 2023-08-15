import React from 'react';

const CartItem = ( item ) => {
  const { name, price, quantity } = item

  return (
    <div className="cart-item">
      <div className="cart-item-info">
     
        <p>name: {name}</p>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
       
      </div>
    </div>
  );
};

export default CartItem;
