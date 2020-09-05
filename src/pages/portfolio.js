import React from "react";
import Navbar from "../components/navbar";
import Accordion from "../components/Accordion/accordion";
import images from "../components/images";

const projects = [
    {
        name: "Google Books Search",
        site: "http://googlebooks.online/",
        repo: "https://github.com/Terry0532/Google-Books-Search",
        image: images.GoogleBooksSearchImage,
        details: "This is a MERN stack application that will call google books API to return user search results. If user wants to save the book for later use, they need to sign up first. After login user will have access to saved page. Ranking page will display top 10 saved books from all users. \n Test account Username: 1 Password: 1"
    }, {
        name: "Celebrity Twin",
        site: "https://terry0532.github.io/celebrity_twin/",
        repo: "https://github.com/Terry0532/celebrity_twin",
        image: images.CelebrityTwinImage,
        details: "​Celebrity Twin is corn-fed entertainment for the bored and harmlessly narcissistic. It takes the user's uploaded images to find a celebrity doppelgänger. Then the mildly voyeuristic user can link to IMDb, Wikipedia, and other resources to see what they and their celeb of choice share in common.​"
    }, {
        name: "Weather Dashboard",
        site: "https://terry0532.github.io/Weather-Dashboard/",
        repo: "https://github.com/Terry0532/Weather-Dashboard",
        image: images.WeatherDashboardImage,
        details: "A simple weather forecast site built with mobile first design in mind."
    }, {
        name: "HTML Quiz",
        site: "https://terry0532.github.io/HTML-Quiz/",
        repo: "https://github.com/Terry0532/HTML-Quiz",
        image: images.QuizImage,
        details: "This a timed code quiz with multiple-choice questions. It will run in the browser and feature dynamically updated HTML and CSS."
    }, {
        name: "Work Day Scheduler",
        site: "https://terry0532.github.io/Work-Day-Scheduler/",
        repo: "https://github.com/Terry0532/Work-Day-Scheduler",
        image: images.WorkDaySchedulerImage,
        details: "A simple calendar application that allows the user to save events for each hour of the workday."
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