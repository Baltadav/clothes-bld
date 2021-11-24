import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount.js';
import ItemListContainer from './components/ItemListCointainer.js';
import NavBar from './components/NavBar.js';

function App() {

  const stock = 10;
  const initial = 1;

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <body>
        <ItemListContainer greeting="Hola"/>
        <ItemCount stock={stock} initial={initial} />
      </body>
    </div>
  );
}

export default App;
