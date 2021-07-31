import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider =  ({defaultValue= [], children}) => {

    const [cart, setCart]= useState(defaultValue);
    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        
        if (!inCart(item.id)) {
            cart.push({item: item, quantity: quantity});
            setTotal(total + quantity * item.price);
        console.log(cart);
        } else {
            setCart(cart => [...cart,{item, quantity}])
            setTotal(total + quantity * item.price);
           
        }


    }

    const inCart = (id) => {
        if (cart.findIndex(i => i.item.id === id) >= 0) {
        return true;
        } else {
        return false;
        }
    }

    const removeItem = (id)=>{
        setCart (cart.filter(({item})=> item.id !== id));
    }
        

    const clear = () => {
        setCart ([]);
    }

    const totalPrice = cart.reduce(
        (total, current) => total + current.item.price * current.quantity, 0
    );

    const totalQuantity = cart.reduce(
        (total, current) => total + current.quantity, 0
    );
    return (
        <CartContext.Provider value={{cart, addItem, clear, removeItem, totalPrice, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
