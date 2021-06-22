import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarElements';
import { Link as SidebarLinks } from 'react-scroll';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        activeClass="active"
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={toggle}
                        >
                            Main
                    </SidebarLink>
                    <SidebarLink
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={toggle}
                        >
                            About
                    </SidebarLink>
                    <SidebarLink
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                        onClick={toggle}
                        >
                            Contact
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar
