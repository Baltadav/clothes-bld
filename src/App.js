import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount.js';
import ItemListContainer from './components/ItemListCointainer.js';
import NavBar from './components/NavBar.js';

function App() {

  const stock = 10;
  const initial = 1;
  const show = true;
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div>
        <ItemListContainer greeting="Hola"/>
        {show ? null : <ItemCount stock={stock} initial={initial}/>}
      </div>
    </div>
  );
}

export default App;
 