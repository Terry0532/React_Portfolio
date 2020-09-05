import React from "react";
import "./style.css";

function Accordion(props) {
    return (
        <div className="container mt-2">
            <div className="col-md">
                <h1>Portfolio</h1>
                <hr />
                <div className="accordion" id="accordionPortfolio">
                    {/* map through all the objects in projects array */}
                    {props.projects.map((project, index) => (
                        <div className="card">
                            <div className="card-header text-center" id={index}>
                                <h3 className="mb-0 pointer" data-toggle="collapse" data-target={"#" + project.name.replace(/\s/g, "")}
                                    aria-expanded="true" aria-controls={project.name.replace(/\s/g, "")}>{project.name}</h3>
                            </div>
                            {/* if index is 0, then add show to className in order to display it when user open this page*/}
                            <div id={project.name.replace(/\s/g, "")} className={index === 0 ? "collapse show" : "collapse"} aria-labelledby={index}
                                data-parent="#accordionPortfolio">
                                <img src={project.image} alt={project.name} height="400" width="400" className="img-fluid card-img-top" />
                                <div className="card-body text-center">
                                    <hr />
                                    {
                                        project.details
                                            ? project.details.split('\n').map(item => { return <p>{item}<br /></p> })
                                            : <></>
                                    }
                                    <hr />
                                    <a href={project.site} target="_blank" rel="noopener noreferrer"
                                        className="btn btn-primary mr-1" role="button">Website</a>
                                    <a href={project.repo} target="_blank" rel="noopener noreferrer"
                                        className="btn btn-secondary" role="button">GitHub Repository</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Accordion;