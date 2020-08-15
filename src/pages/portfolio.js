import React from "react";
import Navbar from "../components/navbar";
import Accordion from "../components/Accordion/accordion";
import images from "../components/images";

const projects = [
    {
        name: "Google Books Search",
        site: "https://frozen-anchorage-90956.herokuapp.com/",
        repo: "https://github.com/Terry0532/Google-Books-Search",
        image: images.GoogleBooksSearchImage
    }, {
        name: "Celebrity Twin",
        site: "https://terry0532.github.io/celebrity_twin/",
        repo: "https://github.com/Terry0532/celebrity_twin",
        image: images.CelebrityTwinImage
    }, {
        name: "Weather Dashboard",
        site: "https://terry0532.github.io/Weather-Dashboard/",
        repo: "https://github.com/Terry0532/Weather-Dashboard",
        image: images.WeatherDashboardImage
    }, {
        name: "HTML Quiz",
        site: "https://terry0532.github.io/HTML-Quiz/",
        repo: "https://github.com/Terry0532/HTML-Quiz",
        image: images.QuizImage
    }, {
        name: "Work Day Scheduler",
        site: "https://terry0532.github.io/Work-Day-Scheduler/",
        repo: "https://github.com/Terry0532/Work-Day-Scheduler",
        image: images.WorkDaySchedulerImage
    }
];

function Portfolio() {
    return (
        <div>
            <Navbar about="nav-link" portfolio="nav-link active" resume="nav-link" />
            <Accordion projects={projects} />
        </div>
    );
}

export default Portfolio;