import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../../CartItem/CartItem";




const Cart = () => {
    const{cart, clearCart, total, totalQuantity} = useContext(CartContext)
    
    console.log("Cart Component - cart:", cart);

    if( totalQuantity === 0) {
        
        return (
            <>
                <h1>No hay item en el carrito</h1>
                <Link to= "/"  className = "Option" > Productos </Link>
            </>
         )
    }

    return(
        <div>
            {cart.map(producto => (
                <CartItem
                key={producto.id}
                id={producto.id}
                name={producto.name}
                price={producto.price}
                quantity={producto.quantity}
    />
            ))}

            <h3>Total: $ {total} </h3>
            <h3>Cantidad Total: {totalQuantity} </h3>
            <button className='Button' onClick={() => clearCart()} >Limpiar Carrito</button>
            <Link className='Option' to='/checkout' > Finalizar Compra</Link>
        </div>
    )
}

export default Cart