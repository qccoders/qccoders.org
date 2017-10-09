import React from 'react'
import { NavLink } from 'react-router-dom'
import SlackForm from './SlackEmailForm'
import logo from '../../img/logos/qccoder_logo.png'

import './index.css'

const NavBar = props => (
    <nav className='NavBar navbar navbar-dark bg-dark'>
        <NavLink exact to='/' className='navbar-brand' activeClassName='nav-is-active'>
          <img alt='qccoders' src={logo} height={90} width={130}/>
        </NavLink>
        <NavLink to='/events' className='nav-item' activeClassName='nav-is-active'>Events</NavLink>
        <NavLink to='/mission' className='nav-item' activeClassName='nav-is-active'>Mission</NavLink>
        <NavLink to='/job-board' className='nav-item' activeClassName='nav-is-active'>Job Board</NavLink>
        <SlackForm />
    </nav>
)

export default NavBar 