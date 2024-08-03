import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import CartIcon from "./CartIcon";


function Header() {
    return (
    <header>
        <div>Header with logo</div>
        <Nav/>
        <CartIcon/>
    </header>

    )
}

export default Header;