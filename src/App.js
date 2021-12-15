import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListCointainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getProducts } from './scripts.js';

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
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
 