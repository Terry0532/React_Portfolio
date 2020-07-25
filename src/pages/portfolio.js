import React from "react";
import Navbar from "../components/navbar";
import Accordion from "../components/Accordion/accordion";
import CelebrityTwinImage from "../images/project_screenshots/celebrity_twin.png";
import WeatherDashboardImage from "../images/project_screenshots/weather_dashboard.png";
import QuizImage from "../images/project_screenshots/html_quiz.png";
import WorkDayScheduler from "../images/project_screenshots/work_day_scheduler.png";
import Burger from "../images/project_screenshots/burger.png";

const projects = [
    {
        name: "Celebrity Twin",
        site: "https://terry0532.github.io/celebrity_twin/",
        repo: "https://github.com/Terry0532/celebrity_twin",
        image: CelebrityTwinImage
    }, {
        name: "Weather Dashboard",
        site: "https://terry0532.github.io/Weather-Dashboard/",
        repo: "https://github.com/Terry0532/Weather-Dashboard",
        image: WeatherDashboardImage
    }, {
        name: "HTML Quiz",
        site: "https://terry0532.github.io/HTML-Quiz/",
        repo: "https://github.com/Terry0532/HTML-Quiz",
        image: QuizImage
    }, {
        name: "Work Day Scheduler",
        site: "https://terry0532.github.io/Work-Day-Scheduler/",
        repo: "https://github.com/Terry0532/Work-Day-Scheduler",
        image: WorkDayScheduler
    }, {
        name: "Burger",
        site: "https://polar-inlet-55620.herokuapp.com",
        repo: "https://github.com/Terry0532/burger",
        image: Burger
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