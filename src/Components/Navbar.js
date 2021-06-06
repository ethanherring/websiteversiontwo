import React, { Component } from 'react';
import NavLinks from './NavLinks'
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';


class Navbar extends Component {
    state = {};
    
    constructor(props, context) {
        super(props, context);
        this.clicked = false;
        this.state = {
          check: false,
          setCheck: false
        };
       
        this.toggleMenu = this.toggleMenu.bind(this);
      }
       
      toggleMenu() {
        return(<NavLinks />)
      }
    render () {
      
      if(this.state.check) {
        return(<NavLinks />)
      }
      
        return(
          
            <div className="navbar">
                <Hamburger easing="ease-in"
                    onClick={this.setState({check: !this.state.check})}
                    color="#666699" />
                     
                    
                    
            </div>
        );
    }

}

export default Navbar;