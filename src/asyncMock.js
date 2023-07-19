const products = [
    {
        id: '1',
        name:'Aire Acondicionado',
        price: 800,
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 25,
        descripcion:'aire Acondicionado 3000'
    },
    {   
        id: '2',
        name:'Aire Acondicionado',
        price: 1000,
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 30,
        descripcion:'aire Acondicionado 1000'
    },
    {
        id: '3',
        name:'Aire Acondicionado',
        price: 1200,
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png',
        stock: 50,
        descripcion:'aire Acondicionado 4000'
    }


]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products)
        }, 500)
    })
}

export const getProductsById= (productId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

