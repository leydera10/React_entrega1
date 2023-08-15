import React, { useContext, useState } from 'react';
//import {useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id,name,img,category, description ,price,stock}) => {
    
    const [quantityAdded, serQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        serQuantityAdded (quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <article className= "CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt="name" className="ItemImg" />
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Description: {description}
                </p>
                <p className="Info">
                    precio : ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to= '/cart' className='Option'>Terminar Comprar </Link>
                      
                    ) : (
                        <ItemCount  initial={0} stock={stock} onAdd={handleOnAdd} />
                    )
                }
               
            </footer>
        </article>
    )
}

export default ItemDetail