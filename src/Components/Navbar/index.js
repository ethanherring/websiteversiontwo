import React from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import {Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLinks} from './NavbarElements';


const Navbar = () => {


    return (
      <>
        <Nav>
            <NavbarContainer>
                    <NavLogo>
                        EH
                    </NavLogo>
                    <MobileIcon>
                        <BiMenuAltRight />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            {/*This is where the react-scroll links will go*/}
                            <NavLinks
                                    activeClass="active"
                                    to="main"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                    >
                                        Main
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
            </NavbarContainer>
        </Nav>
      </>  
    );
}

export default Navbar;
