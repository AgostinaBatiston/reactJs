import React from 'react'
import ItemList from '../components/ItemList/ItemList'
import './views.css';

function Home() {
    return (
      <div>
        <h1 className="titleInicio">HOME</h1>
        <ItemList />
      </div>
    );
  }
  
  export default Home;