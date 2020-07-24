import React from "react";
import Navbar from "../components/navbar";

function Portfolio() {
    return (
        <div>
            <Navbar about="nav-link" portfolio="nav-link active" resume="nav-link" />
            <p>Portfolio</p>
        </div>
    );
}

export default Portfolio;