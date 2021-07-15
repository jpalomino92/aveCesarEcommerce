import React from 'react'
import {Card} from 'semantic-ui-react';
import ButtonCounter from '../buttonCounter/buttonCounter';


export default function ItemDetail({OnlyItem}) {

    const  {image,title,category} = OnlyItem

    const extra = (
        <a>
        <ButtonCounter />
        </a>
    )

    return (

        <div>

            <Card
                image= {image}
                header={title}
                meta= {category}
                extra={extra}
            />

                    
        </div>
    )
}

