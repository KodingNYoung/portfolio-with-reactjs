import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import './socialHandles.css'

const SocialHandles = ({ color }) => {
  const linkStyle = {
    color: color
  }
  return (
    <div className="socialMediaHandles">
      <a href="https://twitter.com/18_youngcrown" style={linkStyle} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTwitter}/>
      </a>
      <a href="https://github.com/KodingNYoung/" style={linkStyle} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub}/>
      </a>
      <a href="https://www.linkedin.com/in/abiodun-adebambo-5316551a6/" style={linkStyle} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedinIn}/>
      </a>
    </div>
  )
}

export default SocialHandles
