import React from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

import Calendar from '../shared/Calendar'
import eventsList from '../data/calendarData'
import NavBar from './NavBar'
import Header from './Header'
import GroupDetails from './GroupDetails'
import SlackEmailForm from '../shared/SlackEmailForm'

//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'

const App = props => (
  <div>
    <NavBar />
    <Header />
    <div className="App">
        <GroupDetails />
        <Calendar eventsList={eventsList} />
        <SlackEmailForm />
    </div>
  </div>
);

export default App;
