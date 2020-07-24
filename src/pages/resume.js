import React from "react";
import Navbar from "../components/navbar";

function Resume() {
    return (
        <div>
            <Navbar about="nav-link" portfolio="nav-link" resume="nav-link active" />
            <p>Resume</p>
        </div>
    );
}

export default Resume;