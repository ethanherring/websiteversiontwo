import React, { Component } from 'react';
import NavLinks from './NavLinks'
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
            </div>
        );
    }

}

export default Navbar;