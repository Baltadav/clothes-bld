import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListCointainer.js';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <body>
        <ItemListContainer greeting="Hola"/>
      </body>
    </div>
  );
}

export default App;
