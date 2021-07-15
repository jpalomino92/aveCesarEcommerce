import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
///import { Divider } from 'semantic-ui-react';
import './App.css';
//components
import NavBar from './components/NavBar/NavBar';

//Views
import  Home  from './Views/Home/home';
import  ContactUs  from './Views/ContactUs/contactUs';
import  ItemDetailView  from './Views/ItemDetailView/itemDetailView';
import  Products  from './Views/Products/products';
import  Services  from './Views/Services/services';


const head = "Ave Cesar Ecommerce";

class App extends React.Component{
  
  render(){
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route path="/Services/services">
            
          </Route>
          <Route path="/category/:categoryName">       
            </Route>
          <Route path="/Products/:id">            
          <ItemDetailView />
          </Route>

          <Route path="/ContactUs/contactUs">

          </Route>
        </Switch>
     
              
      </Router>
    
      );
  };
};

export default App;