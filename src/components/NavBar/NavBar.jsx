import React, { Component } from 'react';
import './NavBar.css';
import {MenuItems} from './MenuItems';
import CartWidget from '../CartWidget/CartWidget';


class NavBar extends Component{
    render() {
        return (
                <nav className="navBarItems">
                    <a href="/"> 
                        <h1 className="navBarLogo"><i className="fas fa-biohazard"></i> Ave Cesar Shop</h1>
                    </a>
                    <div className="menuIcon">
                        <i className='fas fa-times'></i>
                    </div>
                    <ul className= 'nav-menu'>
                        {MenuItems.map((item,index)=> {
                            let navBarResult;

                            if (index == "2" ) {
                                navBarResult =  <li key={index}  className={item.cName} > <a className="dropdown-toggle" href="#" id="navLinks" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{item.title}</a> <div className="dropdown-menu" aria-labelledby="navbarDropdown"> <a className="dropdown-item" href="#">Aros</a> <a className="dropdown-item" href="#">Tinta</a> </div></li>
                            } else {
                                navBarResult = <li key={index}><a className={item.cName} id="navLinks" href= {item.url}>{item.title}</a></li>
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