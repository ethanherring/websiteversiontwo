import { Link } from 'react-scroll';

const NavLinks = () => {
    return(
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
    );

}


export default NavLinks;