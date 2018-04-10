import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import BigCalendar from 'react-big-calendar'

//styles 
import './index.css'
import 'react-big-calendar/lib/css/react-big-calendar.css' 

BigCalendar.momentLocalizer(moment);

export default (props) => (
  <div>
    <BigCalendar
      {...props}
      events={props.events}
      views={['month']}
    />
  </div>
)
