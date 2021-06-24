import React, { useState, useEffect } from "react";

import "./ItemCount.css";

const ItemCount = ({ initial, min, max, setQuantity }) => {
  const [counter, setCounter] = useState(initial);

  const handleIncrement = () => {
    counter < max ? setCounter(counter + 1) : console.log("Máximo alcanzado");
  };

  const handleDecrement = () => {
    counter > min ? setCounter(counter - 1) : console.log("Mínimo alcanzado");
  };

  useEffect(() => {
    setQuantity(counter);
  }, [counter, setQuantity]);

  return (
    <div className="counter" style={{ width: "15rem" }}>
      <div className="counter__content">
        <div className="counter__content-controls">
          <span
            className="counter__content-controls-subtract"
            onClick={handleDecrement}
          >
            
          </span>
          <span className="counter__content-controls-value"> {counter} </span>
          <span
            className="counter__content-controls-add"
            onClick={handleIncrement}
          >
            
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
