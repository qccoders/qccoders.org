import React from 'react'
import Calendar from '../../shared/Calendar'
import eventsList from '../../data/calendarData'
import moment from 'moment'

import './index.css'

const currentMonth = moment().format('MMMM')

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Events'>
            <div className='row event-calendar'>
                <div className='container'>
                    <div className='col'>
                        <h3 className='text-center'>{currentMonth}'s Events</h3>
                        <Calendar toolbar={false}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default (props) => new Events(props);
