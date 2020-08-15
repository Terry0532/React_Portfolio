import React from "react";
import Navbar from "../components/navbar";
import Selfie from "../images/other/selfie.png";
import Tree from "../components/Tree/tree";

function About() {
    return (
        <div>
            <Navbar about="nav-link active" portfolio="nav-link" resume="nav-link" />
            <div className="container mt-2">
                <div className="col-md">
                    <h1>Terry Gong</h1>
                    <hr />
                    <div className="row">
                        <div className="col-md-2">
                            <img src={Selfie} alt="selfie" className="float-left img-fluid p-2" />
                        </div>
                        <div className="col-md-10">
                            <p>I graduated as a 3D artist that mainly for game development, because of the love for video
                            games. After graduation I attended the University of Utah again, this time is for professional education's coding boot camp to become a web developer.
                            Currently, I finished coding boot camp progrem and looking for any opportunity to further improve my web development skills.</p>
                            <p>If you need somthing new to play, here are a few games that I love.</p>
                            <Tree />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;