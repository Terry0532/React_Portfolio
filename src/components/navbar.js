import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <ul className="nav nav-tabs justify-content-end">
            <li className="nav-item">
                <Link className={props.about} to="/">ABOUT</Link>
            </li>
            <li className="nav-item">
                <Link className={props.portfolio} to="/portfolio">PORTFOLIO</Link>
            </li>
            <li className="nav-item">
                <Link className={props.resume} to="/resume">RESUME</Link>
            </li>
        </ul>
    );
}

export default Navbar;