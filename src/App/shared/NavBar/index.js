import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

import './index.css'

const eventText = "Events"
const missionText = "Mission"
const jobText = "Job Board"

const NavBar = props => (
      <nav className='NavBar navbar navbar-dark nav'>
        <NavLink to='/' className='nav-item'><Logo/></NavLink>
        <NavLink to='/events' className='nav-item' activeClassName='nav-is-active'>{eventText}</NavLink>
        <NavLink to='/mission' className='nav-item' activeClassName='nav-is-active'>{missionText}</NavLink>
        <NavLink to='/job-board' className='nav-item' activeClassName='nav-is-active'>{jobText}</NavLink>
      </nav>
)

export default NavBar 