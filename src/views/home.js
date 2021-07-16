import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import './views.css';

function Home() {
    return (
      <div>
        <h1 className="titleInicio">Bienvenidos a Tienda Uzumaki</h1>
        <ItemListContainer />
      </div>
    );
  }
  
  export default Home;