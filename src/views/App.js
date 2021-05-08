import React from 'react';
import Header from '../components/Header';
import Home from './Home';
import ProductSingle from './Product';

import {CardProvider} from '../context/storeProducts'

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const { useState } = React;

const App = () => {
  
  const [cardProduct, setCardProduct] = useState([])

	const updatecardProducts = (name) => {
    const update = [...cardProduct];
    const iscardProduct = cardProduct.indexOf(name);

    if (iscardProduct >=0) {
      update.splice(iscardProduct, 1)
    }else{
      update.push(name);
    }
    setCardProduct(update);
  }

  return (
    <CardProvider value={{
      cardProducts: cardProduct,
      updatecardProducts: updatecardProducts
    }}>
      <Router>
        <Header/>
        
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/producto/:id' component={ProductSingle}></Route>
        </Switch>
      </Router>
    </CardProvider >
  );
}

export default App;