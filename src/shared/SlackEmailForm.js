import React, { Component } from 'react'
import {slackToken} from '../credentials'
import {isEmail} from 'validator/lib/isEmail'

class SlackEmailForm extends Component {
    state = {
        inputText: ""
    }

    handleFormSubmit = e => {
        e.preventDefault()
        

    }

    handleInputChange = e => {
        this.setState({
            inputText: e.target.value
        })
        
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