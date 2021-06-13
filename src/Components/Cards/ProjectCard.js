import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCode } from "@fortawesome/free-solid-svg-icons";

import "./ProjectCard.css";

const ProjectCard = ({ project }) => {
  const {
    url,
    project: { title, description, githubRepoLink, liveWebsiteLink, stacks },
  } = project;
  return (
    <div className="project-card">
      <div className="cardImg-container">
        <img src={url} alt="card" />
      </div>
      <div className="overlay-info">
        <header>
          <h2 className="title">{title}.</h2>
          <p className="stacks">{stacks}</p>
        </header>
        <p className="description">{description}</p>
        <footer>
          <a
            href={liveWebsiteLink}
            title="Live website"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
          <a
            href={githubRepoLink}
            title="Github repo"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faCode} />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default ProjectCard;
