import {React,useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../../components/itemList/itemList';



export default function CategoryView() {

    const [items,setItems] = useState([]);
    const {categoryName} = useParams()


    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res=>res.json())
            .then(items=>setItems(items))
      },[]);
      

    return (

        <div id = 'ItemListContainer'>
            <ItemList items={items}  />
        </div>
            

    )
}
