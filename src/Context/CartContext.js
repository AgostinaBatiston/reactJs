import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
    const [cart, setCart]= useState([]);
    const [total, setTotal] = useState(0);
	

    const addItem = (item, quantify) => {
        if (!inCart(item.id)) {
        cart.push({item: item, quantify: quantify});
        setTotal(total + quantify * item.price);
        console.log(cart);
        } else {
            setCart([...cart,{item, quantify}])
            setTotal(total + quantify *item.price);
            console.log(cart)
        }
    }

    const inCart = (id) => {
        if (cart.findIndex((i) => i.item.id === id) >= 0) {
        return true;
        } else {
        return false;
        }
    }

    const removeItem = () => {
        const remove = cart.filter(item => item.id !== Number.id);
        setCart([...remove]);
    }

    const clear = () => {
        setCart ([])
    }

    const totalPrice = cart.reduce(
        (total, current) => total + current.item.price * current.quantify, 0
    );

    const totalQuantify = cart.reduce(
        (total, current) => total + current.quantify, 0
    );

    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, totalPrice, totalQuantify}}>
            {props.children}
        </CartContext.Provider>
    )
}