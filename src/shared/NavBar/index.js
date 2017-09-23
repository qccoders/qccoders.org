import React from 'react'
import {Link} from 'react-router-dom'
import SlackForm from './SlackEmailForm'

import './index.css'

const NavBar = props => (
    <ul className='NavBar'>
        <Link to='/'>Home</Link>
        <Link to='/mission'>Mission</Link>
        <Link to='/job-board'>Job Board</Link>
        <SlackForm />
    </ul>
)

export default NavBar