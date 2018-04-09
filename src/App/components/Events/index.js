import React from 'react'
import Calendar from '../../shared/Calendar'
import eventsList from '../../data/calendarData'
import moment from 'moment'

import './index.css'

const currentMonth = moment().format('MMMM')
const eventURL = 'http://localhost:3001/events'
const parseJson = (jsonResponse) => jsonResponse.json();
const logData = (json) => console.log(json)
const formatData = (json) => 
    json.map((event, index) => ({id: event.index, title: event.title, allDay: false, start: event.startDate, end: event.endDate}));

    
class Events extends React.Component {
    constructor(props) {
        super(props);
        this.state = {eventList: []};
    }

    componentDidMount() {
        fetch(eventURL).then(parseJson).then(formatData).then((eventData) => this.setState({eventList: eventData}));
    }

    render() {
        return (
            <div className='Events'>
            <div className='row event-calendar'>
                <div className='container'>
                    <div className='col'>
                        <h3 className='text-center'>{currentMonth}'s Events</h3>
                        <Calendar toolbar={false} events={this.state.eventList} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default (props) => new Events(props);
