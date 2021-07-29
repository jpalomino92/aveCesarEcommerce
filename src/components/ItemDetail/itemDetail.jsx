import React ,{useState,useContext}from 'react'; 
import {Grid,Image,Container} from 'semantic-ui-react';
import ButtonCounter from '../buttonCounter/buttonCounter';
import { CartContext } from '../../context/cartContext';
import ButtonCart from '../buttonGoToCart/buttonGoToCart';
import './itemDetail.css'


export default function ItemDetail({OnlyItem}) {
    
    let extra = 0
    const  {image,title,category,description} = OnlyItem
    const [cantidad, setCantidad] = useState(0)
    const {addItem} = useContext(CartContext)
    const [bought,setBought] = useState(false) 



    const onAdd = (quantity) => {
        setCantidad(quantity)
        addItem(OnlyItem,cantidad)
        setBought(true)
        console.log(bought)
        

    } 

    if (bought === true) {

        extra = (
            <a>
                <ButtonCart />
            
            </a>
        )
        

        
        } else {

        extra = (
            <a>
            <ButtonCounter  onAdd={onAdd}/>
            </a>
        )
        

    };
    

    return (

        <div className="ItemGrid">
               <div className="imageContainer">
                    <img src={image} className="itemDetailImage"/>
                </div>

                <div className="descriptionContainer">
                    <div>
                        <h1 className="itemDetailTitle">
                                {title}
                        </h1>   
                        <p>                    
                            {description}
                        </p>                
                    </div>
                </div>

                <div className="buttonContainer">
                    {extra}
                </div>        
        </div>
    )
}



