import React ,{useState}from 'react'; 
import {Card} from 'semantic-ui-react';
import ButtonCounter from '../buttonCounter/buttonCounter';



function Item({item,key,detail}) {

    const  {image,title,category,id} = item
    const [cantidad, setCantidad] = useState(0)
    
    const onAdd = (quantity) => {
        setCantidad(quantity);
        console.log(cantidad)
    } 

    const extra = (
        <a>
        <ButtonCounter  onAdd={onAdd}/>
        </a>
    )

    return (
        <div >
            <Card
                href = {`/Products/${id}`}
                image= {image}
                header={title}
                meta= {category}
                extra={extra}
            />
                        
        </div>
    )
}

export default Item

