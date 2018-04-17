import React from 'react'
import { NavLink } from 'react-router-dom'
import SlackForm from './SlackEmailForm'
import logo from '../../img/logos/qccoder_logo.png'
import Headroom from 'react-headroom'
import Logo from '../Logo'

import './index.css'

const eventText = "{ Events }"
const missionText = "{ Mission }"
const jobText = "{ Job Board }"

const NavBar = props => (
    <Headroom>
      <Logo />
      <nav className='NavBar navbar navbar-dark nav'>
        <NavLink to='/events' className='nav-item' activeClassName='nav-is-active'>{eventText}</NavLink>
        <NavLink to='/mission' className='nav-item' activeClassName='nav-is-active'>{missionText}</NavLink>
        <NavLink to='/job-board' className='nav-item' activeClassName='nav-is-active'>{jobText}</NavLink>
      </nav>
    </Headroom>
)

export default NavBar 