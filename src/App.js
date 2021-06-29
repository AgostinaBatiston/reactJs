import React, { Component } from 'react'
import './App.css'
import Home from "./views/home";
import About from "./views/about";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Detail from './components/ItemDetailContainer/ItemDetailContainer';
import Electronicos from '../src/views/Categories/CategoryElectronics';
import Joyas from '../src/views/Categories/CategoryJewelery';
import Mujer from '../src/views/Categories/CategoryWomen';
import Hombre from '../src/views/Categories/CategoryMen';
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
              <Route path='/detail/:id' component={Detail} />
              <Route path='/categories/electronics' component={Electronicos} />
              <Route path='/categories/women' component={Mujer} />
              <Route path='/categories/men' component={Hombre} />
              <Route path='/categories/jewelery' component={Joyas} />
              
              
            </Switch>
            
          </div>
        </Router>
        
       
        
        
  
          
      
     
    );
  }
}

export default App;