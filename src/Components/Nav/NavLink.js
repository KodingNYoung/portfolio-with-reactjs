import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'


const NavLink = ({ view, active, onClick, style }) => {
  return (
    <Link to={`/${view}`} onClick={onClick} style={style}>
      {
        (active !== view)
        ? <li>{view}</li>
        : <li className='active'>{view}</li>
      }
    </Link>
  )
}

export default NavLink
