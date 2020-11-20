import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './Buttons.css';

export const BurgerIcon = ({ onClick }) => {
  return (
    <button className="burger" onClick={onClick}>
      <div className="line line1"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
    </button>
  )
}

export const CancelIcon = ({ onClick }) => {
  return (
    <button className="cancel" onClick={onClick}>
      <FontAwesomeIcon icon={faTimes} />
    </button>
  )
}