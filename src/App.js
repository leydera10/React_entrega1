
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import ItemListcontainers from "./components/ItemListContainer/itemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element= {<ItemListcontainers/>}/>
          <Route path='/category/:categoryId' element={<ItemListcontainers/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*'element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

