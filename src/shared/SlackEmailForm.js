import React, { Component } from 'react'
import {slackToken} from '../credentials'
import isEmail from 'validator/lib/isEmail'
import PropTypes from 'prop-types'

import { sendSlackInvite } from '../services/sendSlackInvite'


class SlackEmailForm extends Component {
    
    state = {
        inputText: ""
    }

    handleFormSubmit = e => {

        const {inputText} = this.state

        e.preventDefault()
        console.log(isEmail(inputText))
        isEmail(inputText) ? sendSlackInvite(inputText, slackToken) : this.displayInputError()

    }

    handleInputChange = e => {

        this.setState({
            inputText: e.target.value
        })
        
    }

    displayInputError = () => {

        console.log('error')

    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <input 
                    className='SlackEmailForm'
                    type='email'
                    placeholder='your-email@email.com'
                    value={this.state.inputText}
                    onChange={this.handleInputChange}
                />
            </form>
        )
    }
}

export default SlackEmailForm