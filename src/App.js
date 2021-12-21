import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getProducts } from './scripts.js';
import {CartContextProvider} from './components/context/CartContext.js';
import CartContainer from './components/Cart/CartContainer.js';

function App() {

  const [listProduct, setlistProduct] = useState([])
  const stock = 10;
  const initial = 1;
  
  useEffect(() => {
    const list = getProducts()
    
    list.then(item => {
      setlistProduct(item)
    }).catch(err  => {
        console.log(err)
    })

    return (() => {
      setlistProduct([])
    })
  }, [])
  

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
            <header className="App-header">
              <NavBar/>
            </header>
            <Switch>\
              <Route exact path='/'>
                <ItemListContainer listProduct={listProduct} setlistProduct={setlistProduct}/>
              </Route>
              <Route path='/category/:category'>
                <ItemListContainer listProduct={listProduct} />
              </Route>
              <Route path='/item/:productId'>
                <ItemDetailContainer stock={stock} initial={initial}/>
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
 