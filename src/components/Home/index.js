import React from 'react'

import Calendar from '../../shared/Calendar'
import eventsList from '../../data/calendarData'
import Header from './Header'
import GroupDetails from './GroupDetails'

//styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'

const App = props => (
  <div>
    <Header />
    <div className="App container">
      <div className="row">
        <div className="col-9">
          <GroupDetails />
        </div>
        <div className="col-3">
          <Calendar eventsList={eventsList} />
        </div>
      </div>
    </div>
  </div>
);

export default App;
