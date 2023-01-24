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
    <div className="card-swiper">
      <div className="card-groups">
        <div className="card-group" data-index="0" data-status="active">
          <div className="little-card cards"></div>
          <div className="big-card cards">1</div>
          <div className="little-card cards"></div>
          <div className="big-card cards">2</div>
          <div className="little-card cards"></div>
          <div className="big-card cards">3</div>
          <div className="little-card cards"></div>
          <div className="big-card cards">4</div>
        </div>
        <div className="card-group" data-index="1" data-status="unknown">
          <div className="little-card cards"></div>
          <div className="big-card cards">5</div>
          <div className="little-card cards"></div>
          <div className="big-card cards">6</div>
          <div className="little-card cards"></div>
          <div className="big-card cards">7</div>
          <div className="little-card cards"></div>
          <div className="big-card cards">8</div>
        </div>
        <div className="card-group" data-index="2" data-status="unknown">
          <div className="little-card cards"></div>
          <div className="big-card cards">9</div>
          <div className="little-card cards"></div>
          <div className="big-card cards">10</div>
          <div className="little-card cards"></div>
          <div className="big-card cards">11</div>
          <div className="little-card cards"></div>
          <div className="big-card cards">12</div>
        </div>
      </div>
      <div className="card-swiper-buttons">
        <button id="left" onClick={handleLeftClick}>
          <i className="fa fa-angle-double-left fa-2x" aria-hidden="true"></i>
        </button>
        <button id="right" onClick={handleRightClick}>
          <i className="fa fa-angle-double-right fa-2x" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}

export default Fan;
