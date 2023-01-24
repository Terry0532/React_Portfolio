import React from "react";
import Navbar from "../components/Navbar/navbar";
import Selfie from "../images/other/selfie.JPG";
import Tree from "../components/Tree/tree";

function About() {
    return (
        <div>
            <Navbar about="nav-link active" portfolio="nav-link" resume="nav-link" />
            <div className="container mt-2">
                <div className="col-md">
                    <h1>Hello!</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-2">
                            <img src={Selfie} alt="selfie" className="float-left img-fluid" />
                        </div>
                        <div className="col-md-10">
                            <p>
                                My name is Terry Gong, I graduated as a 3D artist that mainly for game development, because of the love for video games.
                                But I've always been into coding as well.
                                So I took a coding boot camp program from University of Utah again to become a full stack developer.
                                Right now, I'm looking for any opportunity to get myself into this field and learn more about web dev.
                            </p>
                            <p>Skills: JavaScript, HTML, CSS, jQuery, React, NodeJS, ExpressJS, MySQL, Sequelize, MongoDB, Mongoose, AWS EC2, AWS RDS, Socket.IO</p>
                            <p>If you need something new to play, here are a few games that I love.</p>
                            <Tree />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;