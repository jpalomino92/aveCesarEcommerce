import React, { createContext, createElement, useState } from 'react'

export const CartContext = createContext()

export default function CartProvider({children}) {

    const [cart,setCart] = useState([]);

    const isInCart = (id) => cart.some(item => item.id === id)

 
    function addItem(item,quantity) {

        if (isInCart(item.id)){
            const newCart = cart.map(cartElement =>{
                if (cartElement.id === item.id) {
                    return{...cartElement, quantity :cartElement.quantity + quantity}
                } else return cartElement;
            })
            setCart(newCart)
            } else {
                setCart(cart => [...cart, {...item,quantity}])
            }
    }

    const removeItem = (id) => setCart(cart.filter(item => item.id !== id));

    const clearCart = () => setCart([]);




    return (
        <CartContext.Provider value={{cart,addItem,removeItem,clearCart,isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
