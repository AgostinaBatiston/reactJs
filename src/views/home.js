import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import './views.css';

function Home() {
    return (
      <div>
        <h1 className="titleInicio">HOME</h1>
        <ItemListContainer />
      </div>
    );
  }
  
  export default Home;