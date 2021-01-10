import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import "./socialHandles.css";

const SocialHandles = ({ color, contact }) => {
  const linkStyle = {
    color: color,
  };
  const { twitter_handle, github_handle, linkedin_id } = contact;
  return (
    <div className="socialMediaHandles">
      <a
        href={`https://twitter.com/${twitter_handle}`}
        style={linkStyle}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href={`https://github.com/${github_handle}`}
        style={linkStyle}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href={`https://www.linkedin.com/in/${linkedin_id}/`}
        style={linkStyle}
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
};

export default SocialHandles;
