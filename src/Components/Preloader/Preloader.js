import React from 'react'
import './Preloader.css';
import preloader from '../../img/preloader.svg';

const Preloader = ({messsage}) => {
  return (
    <div className="preloader">
      <img src={preloader} alt="preloader"/>
      <p>{messsage}</p>
    </div>
  )
}

export default Preloader
