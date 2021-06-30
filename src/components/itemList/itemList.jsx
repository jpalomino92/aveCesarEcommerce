import {React,useState, useEffect } from 'react';
import { Card , Grid} from 'semantic-ui-react';
import ButtonExampleConditionalsCustom from '../buttonCounter/buttonCounter';


  
  export default function CardExampleCardProps () {

    const [items,setItems] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(items=>setItems(items))
      });





      const extra = (
        <a>
        <ButtonExampleConditionalsCustom  />
        </a>
    )



    return(
        <div>
            <Grid container columns={3}>
            {items.map((items,idx) =>{

                return(

                    <Grid.Column>
                        <Card
                            image= {items.image}
                            header={items.title}
                            meta= {items.category}
                            description={items.description} 
                            extra={extra}
                        />
                    </Grid.Column>

                )
            })
            }

            </Grid>
            


        </div>
    )
  }


