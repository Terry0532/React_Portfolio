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
                            <h3><b>Skills</b></h3>
                            <p>JavaScript, HTML, CSS, jQuery, React, NodeJS, ExpressJS, MySQL, Sequelize, MongoDB, Mongoose, AWS EC2, AWS RDS</p>
                            <h3><b>Projects</b></h3>
                            <h6><i><b>GOOGLE BOOKS SEARCH</b></i></h6>
                            <p>A site that utilize Google Books API for user to search and save books, as well as a ranking page to display top saved books across all users.</p>
                            <p>&#9679; React and bootstrap for frontend; Sequelize and ExpressJS for backend; AWS RDS for database.</p>
                            <p>&#9679; JWT for user authorization, bcrypt to hash user password and dotenv to hide other sensitive data such as database username, password, etc.</p>
                            <p>&#9679; Uses ChartJS to display top 10 saved books from all users.</p>
                            <p>GitHub Repo: <a href="https://github.com/Terry0532/Google-Books-Search" target="_blank" rel="noopener noreferrer">Link</a> Deployed on AWS EC2: <a href="http://googlebooks.online/" target="_blank" rel="noopener noreferrer">Link</a></p>
                            <h6><i><b>WEATHER DASHBOARD</b></i></h6>
                            <p>
                                A simple site built with “mobile first design” in mind.
                                Uses OpenWeatherMap’s api for weather informations.
                                Details such as, provide user with their local time and the searched city’s time;
                                a GPS button to get user’s current location;
                                uses local storage to save last searched city for faster access when user open the site again.
                           </p>
                            <p>GitHub Repo: <a href="https://github.com/Terry0532/Weather-Dashboard" target="_blank" rel="noopener noreferrer">Link</a> Deployed on Heroku: <a href="https://terry0532.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">Link</a></p>
                            <h3><b>Education</b></h3>
                            <p>Salt Lake Community College - General Education, 2012-2016</p>
                            <p>University of Utah - Film and Media Arts with Entertainment Arts and Engineering Emphasis BA, 2016-2019</p>
                            <a href="https://www.youracclaim.com/badges/fc3efed1-0c3b-4a45-94a1-6161b27a112d/public_url" target="_blank" rel="noopener noreferrer">University of Utah Professional Education — Full Stack Developer Certificate, 2020 Feb-Aug</a>
                            <h3><b>Work Experiences</b></h3>
                            <p>Delivery Driver, Rice King Restaurant; Midvale, Utah — 2012-2019</p>
                            <p>Warehouse Associate, Amazon; Salt Lake City, Utah — 2019-2020</p>
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