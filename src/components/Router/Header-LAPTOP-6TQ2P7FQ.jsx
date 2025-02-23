import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import CartIcon from "./CartIcon";
import logo from "./../../icons/logo.png"


function Header() {
    return (
    <header>
        <div>
        <Link to="/">
                    <img src={logo} alt="Company Logo" style={{ width: '60px', height: 'auto' }} /> 
                </Link>
        </div>
        <Nav/>
        <CartIcon/>
    </header>

    )
}

export default Header;