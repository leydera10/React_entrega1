import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <button className="Option" onClick={() => removeItem(id)}>Eliminar</button>
        </div>
    );
};

export default CartItem;
