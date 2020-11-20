import React from 'react'
import './Heading.css';

const Heading = ({ title }) => {
  return (
    <header className="heading">
      <h1>{title}</h1>
      <div className="underliner"></div>
    </header>
  )
}

export default Heading;
