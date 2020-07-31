import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <ul className="nav nav-tabs justify-content-end">
            <li className="nav-item">
                <Link className={props.about} to={process.env.PUBLIC_URL + "/"}>ABOUT</Link>
            </li>
            <li className="nav-item">
                <Link className={props.portfolio} to={process.env.PUBLIC_URL + "/portfolio"}>PORTFOLIO</Link>
            </li>
            <li className="nav-item">
                <Link className={props.resume} to={process.env.PUBLIC_URL + "/resume"}>RESUME</Link>
            </li>
        </ul>
    );
}

export default Navbar;