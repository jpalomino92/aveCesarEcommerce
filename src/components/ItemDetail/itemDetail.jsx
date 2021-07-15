import React ,{useState}from 'react'; 
import {Card, Grid} from 'semantic-ui-react';
import ButtonCounter from '../buttonCounter/buttonCounter';


export default function ItemDetail({OnlyItem}) {

    const  {image,title,category} = OnlyItem
    const [cantidad, setCantidad] = useState(0)


    const onAdd = (quantity) => {
        setCantidad(quantity);
    } 

    const extra = (
        <a>
        <ButtonCounter onAdd={onAdd}/>
        </a>
    )

    return (

        <div>

            <Grid centered  columns={4}>
                <Grid.Column>
                    <Card
                        image= {image}
                        header={title}
                        meta= {category}
                        extra={extra}
                    />
                </Grid.Column>
            </Grid>


                    
        </div>
    )
}

