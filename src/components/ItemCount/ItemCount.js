import React,  { useState }  from 'react'
import { Button } from 'semantic-ui-react'
import './ItemCount.css';

function ItemCount (){
    
    const [number, setNumber] = useState(0);

  const handleUp = () => {
    // console.log("Hiciste Click");
    setNumber(number + 1);
  };

  const handleDowm = () => {
    setNumber(number - 1);
  };

  return (
    <div className="App">
    
      <p>{number}</p>
      <Button positive onClick={handleUp}>+</Button>
      <Button negative onClick={handleDowm}>-</Button>
    </div>
  );
}

export default ItemCount;
