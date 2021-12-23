import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {CartContextProvider} from './components/context/CartContext.js';
import CartContainer from './components/Cart/CartContainer.js';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
            <header className="App-header">
              <NavBar/>
            </header>
            <Switch>\
              <Route exact path='/'>
                <ItemListContainer />
              </Route>
              <Route path='/category/:category'>
                <ItemListContainer />
              </Route>
              <Route path='/item/:productId'>
                <ItemDetailContainer/>
              </Route>
              <Route path='/cart'>
                <CartContainer/>
              </Route>
            </Switch>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
 