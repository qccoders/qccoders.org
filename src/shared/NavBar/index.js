import React from 'react'
import { NavLink } from 'react-router-dom'
import SlackForm from './SlackEmailForm'

import './index.css'

const NavBar = props => (
    <nav className='NavBar navbar navbar-dark bg-dark'>
        <NavLink exact to='/' className='nav-item' activeClassName='nav-is-active'>Home</NavLink>
        <NavLink to='/mission' className='nav-item' activeClassName='nav-is-active'>Mission</NavLink>
        <NavLink to='/job-board' className='nav-item' activeClassName='nav-is-active'>Job Board</NavLink>
        <SlackForm />
    </nav>
)

export default NavBar 