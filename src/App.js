import NavBar from "./components/NavBar"
import ItemListcontainers from "./components/ItemListContainer/itemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListcontainers greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;

