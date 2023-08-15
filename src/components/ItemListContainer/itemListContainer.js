

import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';

const ItemListcontainers = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        let collectionRef = collection(db, 'productos');

        if (categoryId) {
            const q = query(collectionRef, where('category', '==', categoryId));
            collectionRef = q;
        }

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data();
                    return { id: doc.id, ...data };
                });
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]);

    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <p>Loading...</p> : <ItemList products={products} />}
        </div>
    );
}

export default ItemListcontainers;
