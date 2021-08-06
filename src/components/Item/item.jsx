import React ,{useState,useContext}from 'react'; 
import { Link } from 'react-router-dom';
import {Card} from 'semantic-ui-react';
import ButtonCounter from '../buttonCounter/buttonCounter';
import { CartContext } from '../../context/cartContext';



function Item({item}) {

    const  {image,title,category,id} = item
    const {addItem} = useContext(CartContext)





    
    const onAdd = (quantity) => {
        addItem(item,quantity)

    } 

  
    

    return (

        <div >
            <Link to = {`/Products/${id}`} >
                <Card
                    
                    image= {image}
                    header={title}
                    meta= {category}
                />
            </Link>
           
           <ButtonCounter  onAdd={onAdd}/>


                        
        </div>
    )
}

export default Item

