import {React,useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../itemList/itemList';



export const ItemListContainer = () => {

    const [items,setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=7')
            .then(res=>res.json())
            .then(items=>setItems(items))
      },[]);
 


    return (
            <div id = 'ItemListContainer'>
                <ItemList items={items}  />
            </div>


    )
}