import React from 'react';
import Header from '../components/Header';
import Home from './Home';
import ProductSingle from './Product';

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Header/>
      
      <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/producto/:id' component={ProductSingle}></Route>
      </Switch>
    </Router>
  );
}

export default App;