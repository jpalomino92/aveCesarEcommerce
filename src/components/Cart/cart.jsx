import React ,{useState,useContext}from 'react'; 
import { CartContext } from '../../context/cartContext';


export default function Cart() {

    const {cart} = useContext(CartContext)

    console.log({cart})



    return (
        <div>
            <h1>
                Carritoo
            </h1> 
        </div>
    )
}
