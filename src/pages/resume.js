import React from "react";
import Navbar from "../components/navbar";
import resume from "../PDF/Resume.pdf";

function Resume() {
    return (
        <div>
            <Navbar about="nav-link" portfolio="nav-link" resume="nav-link active" />
            <div className="container mt-2">
                <div className="row">
                    <div className="col-md">
                        <h1>Resume</h1>
                        <hr />
                        <article>
                            <h3>EDUCATION</h3>
                            <p>Salt Lake Community College — General Education, 2012-2016</p>
                            <p>University of Utah — Film and Media Arts with Entertainment Arts and Engineering Emphasis,
                        2016-2019</p>
                            <h3>PROJECTS</h3>
                            <p>Senior Project Game: <a href="https://store.steampowered.com/app/1073060/Lonely_Skies/"
                                target="_blank" rel="noopener noreferrer">https://store.steampowered.com/app/1073060/Lonely_Skies/</a></p>
                            <p>Personal Art Projects: <a href="https://terryg.artstation.com"
                                target="_blank" rel="noopener noreferrer">https://terryg.artstation.com</a></p>
                            <p>GitHub: <a href="https://github.com/Terry0532" rel="noopener noreferrer" target="_blank">https://github.com/Terry0532</a>
                            </p>
                            <h3>SKILLS</h3>
                            <ul>
                                <li>Web development: JavaScript, HTML, CSS, jQuery, React, Node.js</li>
                                <li>Database: MySQL, MongoDB</li>
                                <li>Adobe: Photoshop, After Effects, Premiere, Animate</li>
                                <li>Game development: Maya, ZBrush, Unity3D</li>
                                <li>Open-Mindedness</li>
                                <li>Good at observation and pay attention to details</li>
                            </ul>
                            <h3>WORK EXPERIENCE</h3>
                            <h5>Delivery Driver, Rice King; Midvale, Utah — 2012-2019</h5>
                            <p>Take phone order, pack food, and delivery them to the customers on time. Help with walk in
                        customers if busy and occasionally work as a waiter.</p>
                            <h5>Warehouse Associate, Amazon; Salt Lake City, Utah — 2019-Present</h5>
                            <p>Packer, Stower, SLAM(Scan, Label, Apply, Manifest) machine operator.</p>
                        </article>
                        <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-primary" role="button">Open in PDF</a>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;