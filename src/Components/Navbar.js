import React, { Component } from 'react';
import { Link } from 'react-scroll';
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
                
                    <div className="links">
                        <ul>
                            <li>
                                <Link
                                activeClass="active"
                                to="main"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                >
                                    Main
                                </Link>
                            </li>
                            <li>
                                <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                            
                        
                    </div>
                    
            </div>
        );
    }

}

export default Navbar;