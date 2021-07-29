import React ,{useState,useContext}from 'react'; 
import {Grid,Image,Container} from 'semantic-ui-react';

import ButtonCounter from '../buttonCounter/buttonCounter';
import { CartContext } from '../../context/cartContext';
import ButtonCart from '../buttonGoToCart/buttonGoToCart';


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

        <div>
            <Container textAlign='center'>

                    <Grid centered  columns={4}>
                        <Grid.Column width={4}>
                            <Image src={image} />
                        </Grid.Column>
                        <Grid.Column width={9}>
                        {description}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            {extra}
                        </Grid.Column>
                    </Grid>


            </Container>


                    
        </div>
    )
}



