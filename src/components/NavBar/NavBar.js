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
                            return(
                                <li key={index}>
                                    <a className={item.cName} href= {item.url}> 
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                        <CartWidget/>

                    </ul>
                    
                    
                </nav>
        )
     }
}

export default NavBar 