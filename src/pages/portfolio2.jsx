import React from "react";
import Fan from "../components/Fan/fan";
import Navbar from "../components/Navbar/navbar";

function Portfolio2() {
  return (
    <div>
      <Navbar about="nav-link" portfolio="nav-link active" resume="nav-link" />
      <Fan />
    </div>
  );
}

export default Portfolio2;
