import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo_white from './../../assets/Logo.svg';
import logo_dark from './../../assets/Logo.png';
import './Header.css';
const Header = (props) => {
    const {bg} = props;
    return (
        <Navbar bg="transparent" variant={bg ? "dark" : "light"} className="mt-3">
            <Link to="/" ><Navbar.Brand> <img src={bg ? logo_white : logo_dark} width="100x" alt=""/> </Navbar.Brand></Link>
            <Nav className="ml-auto">
                <Link to="/" className="nav-link active">
                    News
                </Link>
                <Link to="/book" className="nav-link active">
                    Destination
                </Link>
                <Link to="/book" className="nav-link active">
                    Blog
                </Link>
                <Link to="/book" className="nav-link active">
                    Contact
                </Link>
            </Nav>
        </Navbar>
    );
};

export default Header;