import React from 'react'
import { NavLink } from 'react-router-dom'
import SlackForm from './SlackEmailForm'
import logo from '../../img/logos/qccoder_logo.png'
import Headroom from 'react-headroom'
 
import './index.css'

const NavBar = props => (
  <Headroom>
    <nav className='NavBar navbar navbar-dark bg-dark'>
        <NavLink to='/events' className='nav-item' activeClassName='nav-is-active'>Events</NavLink>
        <NavLink to='/mission' className='nav-item' activeClassName='nav-is-active'>Mission</NavLink>
        <NavLink to='/job-board' className='nav-item' activeClassName='nav-is-active'>Job Board</NavLink>
    </nav>
  </Headroom>
)

export default NavBar 