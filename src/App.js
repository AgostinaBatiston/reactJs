import React from 'react'
import './App.css'
import Home from "./views/home";

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

import Details from './components/ItemDetailContainer/ItemDetailContainer';
import Category from './components/Category/CategoryList'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {CartProvider} from './Context/CartContext';
import Cart from '../src/views/Cart/Cart';
import OrderForm from '../src/views/OrderForm/OrderForm';



function App() {
  
        return (

          <CartProvider defaultValue={[]}> 
            <Router>
            <div className="App">
              <Header />
              <Navbar />
              
              
              <Switch>
                <Route path="/" exact component={Home}  />
               
                <Route path='/details/:id' component={Details} />
                <Route path='/category/:id' component={Category} />
                <Route path='/cart' component={Cart} />
                <Route path='/order-form' component={OrderForm} />
                
                
              </Switch>
              
            </div>
          </Router>
        </CartProvider>
       
        
        
  
          
      
     
    );
  
}

export default App;