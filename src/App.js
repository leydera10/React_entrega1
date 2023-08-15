
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import ItemListcontainers from "./components/ItemListContainer/itemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element= {<ItemListcontainers/>}/>
          <Route path='/category/:categoryId' element={<ItemListcontainers/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*'element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
       </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

 