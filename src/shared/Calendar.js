import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import BigCalendar from 'react-big-calendar'

//styles 
import '../styles/Calendar.css'

BigCalendar.momentLocalizer(moment);

const Calendar = props => (
    <div className='Calendar'>
        <BigCalendar
            className='BigCalendar'
            events={props.eventsList}
            startAccessor='startDate'
            endAccessor='endDate'
            views={['month', 'agenda']}
        />
    </div>
);

Calendar.propTypes = {
    eventsList:PropTypes.array.isRequired
}

export default Calendar
