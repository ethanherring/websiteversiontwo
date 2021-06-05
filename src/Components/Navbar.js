import React, { Component } from 'react';

import { Sling as Hamburger } from 'hamburger-react';


class Navbar extends Component {
    state = {};
    constructor(props, context) {
        super(props, context);
       
        this.state = {
          visible: false
        };
       
        this.toggleMenu = this.toggleMenu.bind(this);
      }
       
      toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
      }
    render () {
        return(
            <div className="navbar">
                
                <Hamburger easing="ease-in"
                    onToggle={this.toggleMenu}
                    color="#666699" />
                
                    
                    
            </div>
        );
    }

}

export default Navbar;