import { createContext,useState } from "react";

export const CartContext = createContext ({
    cart : [],
    total: 0,
    totalQuantity: 0
    

})

export const CartProvider = ({ children }) => {
    const [cart , setCart] = useState([])
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    
   

    const addItem = (item, quantity) => {

        //const isInCart = cart.some(prod => prod.item.id === item.id);

        if ( !isInCart ( item.id ) ) {
            setCart( prev =>[...prev, {...item, quantity}] );
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity))
        } else {
            const cartUpdated = cart.map( prod => {
                if(prod.item.id === item.id) {
                    return {...prod, cantidad:prod.quantity + quantity};
                } else {
                    return prod;
                }
            });
            setCart(cartUpdated);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));
        }
    }



const removeItem = (itemId) => {
    console.log("Removing item with ID:", itemId);
    const productoEliminado = cart.find(prod => prod.id === itemId);

    if (productoEliminado) {
        console.log("Found product to remove:", productoEliminado);
        const cartUpdated = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdated);

        setTotalQuantity(prev => prev - productoEliminado.quantity);
        setTotal(prev => prev - (productoEliminado.price * productoEliminado.quantity));
    } else {
        console.log("Product not found");
    }
}
    const clearCart = () => {
        setCart([]);
        setTotalQuantity (0);
        setTotal(0);
    }

    const isInCart = ( itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart,total,totalQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

