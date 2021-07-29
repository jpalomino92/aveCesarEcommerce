import React ,{useState,useContext}from 'react'; 
import { Link } from 'react-router-dom';
import {Card, Grid} from 'semantic-ui-react';
import ButtonCounter from '../buttonCounter/buttonCounter';
import { CartContext } from '../../context/cartContext';



function Item({item,key,detail}) {

    const  {image,title,category,id} = item
    const {addItem} = useContext(CartContext)
    const [cantidad, setCantidad] = useState(0)





    
    const onAdd = (quantity) => {
        setCantidad(quantity)
        addItem(item,cantidad)

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

