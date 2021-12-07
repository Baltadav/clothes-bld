import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListCointainer.js';
import NavBar from './components/NavBar.js';
import ItemCount from './components/ItemCount.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer.js';

function App() {

  const stock = 10;
  const initial = 1;
  const show = true;

  return (
    <div className="App">
      <BrowserRouter>
          <header className="App-header">
            <NavBar/>
          </header>
          <Switch>\
            <Route exact path='/'>
              <ItemListContainer/>
            </Route>
            <Route path='/detail'>
              <ItemDetailContainer/>
            </Route>
            <Route>
              {show ? null : <ItemCount stock={stock} initial={initial}/>}
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
 