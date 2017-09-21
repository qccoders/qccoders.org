import React, { Component } from 'react'
import {slackToken} from '../credentials'
import isEmail from 'validator/lib/isEmail'
import PropTypes from 'prop-types'

import { sendSlackInvite } from '../services/sendSlackInvite'


class SlackEmailForm extends Component {

    state = {
        inputText: '',
        formErrorDisplay: 'none'
        
    }

    displayError = status => status ? 
        this.setState({
            inputText: '',
            formErrorDisplay: 'none'
        }) :
        this.setState({
            inputText: '',
            formErrorDisplay: 'inline'
        })

    handleFormSubmit = e => {

        e.preventDefault()

        const {inputText} = this.state
        
        let inviteAttempted = undefined

        if(isEmail(inputText)) inviteAttempted = sendSlackInvite(inputText, slackToken)
        
        inviteAttempted.then(status => this.displayError(status))

    }

    handleInputChange = e => {

        this.setState({
            inputText: e.target.value
        })
        
    }

    render() {

        return (
            <form 
                className='SlackEmailForm'
                onSubmit={this.handleFormSubmit}>
                    <div className='form-group'>
                        <label htmlFor='slack-email-input'>Join our Slack channel!</label>
                        <input 
                            className='form-control'
                            id='slack-email-input'
                            type='email'
                            placeholder='your-email@email.com'
                            value={this.state.inputText}
                            onChange={this.handleInputChange}
                        />
                        <span 
                            className='small success-status-text' 
                            style={{ display: this.state.formErrorDisplay, color: 'red'}}>
                            Failed to submit! 
                        </span>
                    </div>
                    
            </form>
        )
    }
}

export default SlackEmailForm