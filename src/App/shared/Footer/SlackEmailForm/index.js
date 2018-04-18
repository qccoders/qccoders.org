import React, { Component } from 'react'
import isEmail from 'validator/lib/isEmail'
import PropTypes from 'prop-types'

import { sendSlackInvite } from '../../../services/sendSlackInvite'

import './index.css'

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
        if (!inputText) return;
        let inviteAttempted = undefined

        if(isEmail(inputText)) inviteAttempted = sendSlackInvite(inputText)
        
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
                className='SlackEmailForm form-inline'
                onSubmit={this.handleFormSubmit}>
                    <div className='form-group'>
                        <input 
                            className='form-control mr-sm-2'
                            id='slack-email-input'
                            type='email'
                            placeholder='your-email@email.com'
                            value={this.state.inputText}
                            onChange={this.handleInputChange}
                        />
                        <button className='btn'>Get Slack Invite</button>
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