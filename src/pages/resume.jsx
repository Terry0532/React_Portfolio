import React from "react";
import Navbar from "../components/Navbar/navbar";
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
              <h3>
                <b>Skills</b>
              </h3>
              <p>
                JavaScript, HTML, CSS, jQuery, Git,React, NodeJS, ExpressJS,
                MySQL, Sequelize, MongoDB, Mongoose, AWS EC2, AWS RDS,
                Socket.IO, Wordpress, PHP
              </p>
              <h3>
                <b>Projects</b>
              </h3>
              <h6>
                <i>
                  <b>ONLINE-CHESS</b>
                </i>
              </h6>
              <p>An online chess game.</p>
              <p>
                &#9679; Built server side with ExpressJS and Socket.IO for
                online multiplayer game.
              </p>
              <p>
                &#9679; React client side with all game logic, such as, en
                passant capture, stalemate, etc.
              </p>
              <p>&#9679; Need at least 2 clients to start the game.</p>
              <p>
                GitHub Repo:{" "}
                <a
                  href="https://github.com/Terry0532/ChessV2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>{" "}
                Deployed on Heroku:{" "}
                <a
                  href="https://warm-brushlands-64673.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </p>
              <h6>
                <i>
                  <b>GOOGLE BOOKS SEARCH</b>
                </i>
              </h6>
              <p>
                A site that utilize Google Books API for user to search and save
                books, as well as a ranking page to display top saved books
                across all users.
              </p>
              <p>
                &#9679; React and bootstrap for frontend; Sequelize and
                ExpressJS for backend; AWS RDS for database.
              </p>
              <p>
                &#9679; JWT for user authorization, bcrypt to hash user password
                and dotenv to hide other sensitive data such as database
                username, password, etc.
              </p>
              <p>
                &#9679; Uses ChartJS to display top 10 saved books from all
                users.
              </p>
              <p>
                GitHub Repo:{" "}
                <a
                  href="https://github.com/Terry0532/Google-Books-Search"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>{" "}
                Deployed on Heroku:{" "}
                <a
                  href="https://frozen-anchorage-90956.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </p>
              <h3>
                <b>Education</b>
              </h3>
              <p>Salt Lake Community College - General Education, 2012-2016</p>
              <p>
                University of Utah - Film and Media Arts with Entertainment Arts
                and Engineering Emphasis BA, 2016 - 2019
              </p>
              <p>
                University of Utah Professional Education —
                <a
                  href="https://www.youracclaim.com/badges/fc3efed1-0c3b-4a45-94a1-6161b27a112d/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Stack Developer Certificate
                </a>
                , 2020 Feb - Aug
              </p>
              <h3>
                <b>Work Experiences</b>
              </h3>
              <p>
                Warehouse Associate, Amazon; Salt Lake City, Utah — 2019 - 2020
              </p>
              <p>
                Delivery Driver, DoorDash; West Jordan, Utah - 2020 - Present
              </p>
              <p>Flex Driver, Amazon; Salt Lake City, Utah - 2022 - Present</p>
              <p>
                Web Developer Intern, Fusion360; Draper, Utah - 2022 Oct - 2023
                Feb
              </p>
            </article>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              role="button"
            >
              Open in PDF
            </a>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
