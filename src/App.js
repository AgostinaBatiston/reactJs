import React, { Component } from 'react'
import './App.css'
import Home from "./views/home";
import About from "./views/about";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import ProductDetail from './views/ProductDetail/ProductDetail';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




class App extends Component {
  render() {
        return (
          <Router>
          <div className="App">
            <Header />
            <Navbar />
            
            
            <Switch>
              <Route path="/" exact component={Home}  />
              <Route path="/about" component={About} />
              <Route path='/detail/:id' component={ProductDetail} />
              
            </Switch>
            
          </div>
        </Router>
        
       
        
        
  
          
      
     
    );
  }
}

export default App;