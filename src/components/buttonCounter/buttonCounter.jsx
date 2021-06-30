import {React,useState } from 'react';
import { Button } from 'semantic-ui-react';


export default function ButtonExampleConditionalsCustom () {
  const [quantity,setQuantity] = useState(0);

  const handleIncrement = function(){
    setQuantity(quantity + 1);
  };

  const handleDecrement = function(){

    if (parseInt(quantity) > 0) {
      setQuantity(quantity - 1);      
    } else{
      
    }
    
  };


  return(
  <Button.Group>
    <Button onClick={handleIncrement}>+</Button>
    <Button.Or text={quantity} />
    <Button positive onClick={handleDecrement}>-</Button>
  </Button.Group>
  )
}





