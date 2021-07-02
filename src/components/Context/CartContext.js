import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [items, setItems] = useState([]);

    const addItem = (item, quantify) => {
        if (!IsInCart(item.id)) {
        items.push({item: item, quantify: quantify});
        console.log(items);
        } 
    }

    const IsInCart = (id) => {
        if (items.findIndex((i) => i.item.id === id) >= 0) {
        return true;
        } else {
        return false;
        }
    }

    const RemoveItem = (id) => {
        items.splice(
        items.findIndex((i) => i.item.id === id)
        );
    }

    const Clear = () => {
        setItems ([])
    }

    return (
        <CartContext.Provider value={{items, addItem, Clear, RemoveItem}}>
            {props.children}
        </CartContext.Provider>
    )
}