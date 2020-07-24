import React from "react";
import Navbar from "../components/navbar";

function About() {
    return (
        <div>
            <Navbar about="nav-link active" portfolio="nav-link" resume="nav-link" />
            <p>about</p>
        </div>
    );
}

export default About;