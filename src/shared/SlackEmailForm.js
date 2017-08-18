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
                    <input 
                        className= 'form-control'
                        type='email'
                        placeholder='your-email@email.com'
                        value={this.state.inputText}
                        onChange={this.handleInputChange}
                    />
                    <span 
                        className='small success-status-text' 
                        style={{ display: this.state.formErrorDisplay, color: 'red'}}>
                        Failed to sumbit! 
                    </span>
            </form>
        )
    }
}

export default SlackEmailForm