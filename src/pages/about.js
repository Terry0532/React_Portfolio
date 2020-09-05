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
                            <p>
                                I graduated as a 3D artist that mainly for game development, because of the love for video games.
                                But I've always been into coding as well.
                                When I was in high school I took one year of C#.
                                After getting into college, I was aiming for Computer Science major.
                                In order to get in I need to complete several programming classes and math classes.
                                I had no problem with all the required programming classes,
                                But I wasn't doing very well in math classes.
                                And at that time I was in school for a pretty long time already,
                                I don't want to make this any longer,
                                so I decided to switch major to Film and Media Arts with Entertainment Arts and Engineering emphasis,
                                which is game development at the time.
                            </p>
                            <p>
                                After graduation I couldn't find anything related to my major,
                                so I attended the University of Utah again,
                                this time is for professional education's coding boot camp to become a full stack developer.
                                Currently, I finished coding boot camp program and looking for any opportunity to further improve my web development skills.
                            </p>
                            <p>Skills: JavaScript, HTML, CSS, jQuery, React, NodeJS, ExpressJS, MySQL, Sequelize, MongoDB, Mongoose, AWS EC2, AWS RDS</p>
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