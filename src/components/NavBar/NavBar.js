import React, { Component } from 'react';
import './NavBar.css';
import {MenuItems} from './MenuItems';


class NavBar extends Component{
    state = {clicked: false}

    handleClick= () =>{
        this.setState ({ clicked: !this.state.clicked })
    }
    
    render() {
        return (
                <nav className="navBarItems">
                    <h1 className="navBarLogo"><i className="fas fa-biohazard"></i> Ave Cesar Shop</h1>
                    <div className="menuIcon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bards'}></i>
                    </div>
                    <ul className= {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item,index)=> {
                            return(
                                <li key={index}>
                                    <a className={item.cName} href= {item.url}> 
                                    {item.title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
        )
     }
}

export default NavBar 