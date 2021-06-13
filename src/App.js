import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


class App extends Component {
  render() {
        return (
          <>
        
        <Navbar />
        <h1 className='titleInicio'>Libreria uzumaki</h1>
        <ItemListContainer />
  
          
      </>
     
    );
  }
}

export default App;