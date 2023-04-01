import React from "react";
import "./style.css";

let activeIndex = 0;
const groups = document.getElementsByClassName("card-group");

function handleLeftClick() {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  currentGroup.dataset.status = "before";
  nextGroup.dataset.status = "becoming-active-from-after";
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

function handleRightClick() {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
  currentGroup.dataset.status = "after";
  nextGroup.dataset.status = "becoming-active-from-before";
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

function Fan(props) {
  return (
    <div className="container mt-2 fanbody">
      <div className="col-md">
        <h1>Portfolio</h1>
        <hr />
        <div id="test" className="test" tabIndex={-1}>
          123
          <button className="test2">321</button>
        </div>
        <br />
        <div className="card-swiper">
          <div className="card-groups">
            <div className="card-group" data-index="0" data-status="active">
              {/* <div className="little-card cards"></div>
              <div className="big-card cards">1</div>
              <div className="little-card cards"></div>
              <div className="big-card cards">2</div>
              <div className="little-card cards"></div>
              <div className="big-card cards">3</div>
              <div className="little-card cards"></div>
              <div className="big-card cards">4</div> */}
              <div className="card-group-chess" tabIndex={-1}>
                <div className="big-card cards project">
                  <img
                    src="images/project_screenshots/online_chess.gif"
                    alt="online_chess"
                  />
                </div>
                <div className="big-card cards button1">
                  <a
                    href="https://warm-brushlands-64673.herokuapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mr-1"
                    role="button"
                  >
                    Website
                  </a>
                </div>
                <div className="big-card cards button2">
                  <a
                    href="https://github.com/Terry0532/ChessV2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    role="button"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>
              <p>An online chess game.</p>
            </div>
            <div className="card-group" data-index="1" data-status="unknown">
              {/* <div className="little-card cards"></div>
              <div className="big-card cards">5</div>
              <div className="little-card cards"></div>
              <div className="big-card cards">6</div>
              <div className="little-card cards"></div>
              <div className="big-card cards">7</div>
              <div className="little-card cards"></div>
              <div className="big-card cards">8</div> */}
              test
            </div>
            <div className="card-group" data-index="2" data-status="unknown">
              {/* <div className="little-card cards"></div>
              <div className="big-card cards">9</div>
              <div className="little-card cards"></div>
              <div className="big-card cards">10</div>
              <div className="little-card cards"></div>
              <div className="big-card cards">11</div>
              <div className="little-card cards"></div>
              <div className="big-card cards">12</div> */}
              test2
            </div>
          </div>
        </div>
        <div className="card-swiper-buttons">
          <button id="left" onClick={handleLeftClick}>
            <i className="fa fa-angle-double-left fa-2x" aria-hidden="true"></i>
          </button>
          <button id="right" onClick={handleRightClick}>
            <i
              className="fa fa-angle-double-right fa-2x"
              aria-hidden="true"
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fan;
