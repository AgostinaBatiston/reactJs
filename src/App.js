import React, { Component } from 'react'
import './App.css'
import Home from "./views/home";
import About from "./views/about";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";




class App extends Component {
  render() {
        return (
          <Router>
          <div className="App">
            <Navbar />
            <h1 className='titleInicio'>Libreria uzumaki</h1>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              
            </Switch>
            
          </div>
        </Router>
        
       
        
        
  
          
      
     
    );
  }
}

export default App;