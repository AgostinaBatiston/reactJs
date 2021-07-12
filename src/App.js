import React from 'react'
import './App.css'
import Home from "./views/home";

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Products from './views/Products/Products';
import Details from './components/ItemDetailContainer/ItemDetailContainer';
import Category from './components/Category/CategoryList'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {CartProvider} from './Context/CartContext';
import Cart from '../src/views/Cart/Cart';



function App() {
  
        return (

          <CartProvider> 
            <Router>
            <div className="App">
              <Header />
              <Navbar />
              
              
              <Switch>
                <Route path="/" exact component={Home}  />
                <Route path='/products' exact component={Products} />
                <Route path='/details/:id' component={Details} />
                <Route path='/category/:id' component={Category} />
               
                <Route path='/cart' component={Cart} />
                
                
              </Switch>
              
            </div>
          </Router>
        </CartProvider>
       
        
        
  
          
      
     
    );
  
}

export default App;