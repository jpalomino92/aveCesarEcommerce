import React, { Component } from 'react';
import './NavBar.css';
import {MenuItems} from './MenuItems';
import CartWidget from '../CartWidget/CartWidget';


class NavBar extends Component{
    render() {
        


        return (
                <nav className="navBarItems">
                    <h1 className="navBarLogo"><i className="fas fa-biohazard"></i> Ave Cesar Shop</h1>
                    <div className="menuIcon">
                        <i className='fas fa-times'></i>
                    </div>
                    <ul className= 'nav-menu'>
                        {MenuItems.map((item,index)=> {
                            let navBarResult;

                            if (index == "2" ) {
                                navBarResult =  <li key={index}  className={item.cName} > <a class="dropdown-toggle" href="#" id="navLinks" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.title}</a> <div class="dropdown-menu" aria-labelledby="navbarDropdown"> <a class="dropdown-item" href="#">Aros</a> <a class="dropdown-item" href="#">Tinta</a> </div></li>
                            } else {
                                navBarResult = <li key={index}><a className={item.cName} Id="navLinks" href= {item.url}>{item.title}</a></li>
                             }
                        
                            return(

                                <div>
                                    {navBarResult}
                                </div>
                                 
                            )
                        })}
                        <CartWidget/>

                    </ul>
                    
                    
                </nav>
        )
     }
}

export default NavBar 