import React from 'react';
///import { Divider } from 'semantic-ui-react';
import './App.css';
//components
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/container/ItemListContainer';

const head = "Ave Cesar Ecommerce";

class App extends React.Component{
  
  render(){
    return (
    <div>
      <NavBar />
      <ItemListContainer  head = {head}/>
    </div>
    
      );
  };
};

export default App;