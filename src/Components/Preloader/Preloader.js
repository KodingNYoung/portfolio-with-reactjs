import React from 'react'
import './Preloader.css';
import preloader from '../../img/preloader.svg';

const Preloader = () => {
  return (
    <div className="preloader">
      <img src={preloader} alt="preloader"/>
      <p>Make sure your internet connection is turned on.</p>
    </div>
  )
}

export default Preloader
