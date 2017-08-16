import axios from 'axios'
import React, { Component } from 'react'
import {slackToken} from '../credentials'
import isEmail from 'validator/lib/isEmail'


class SlackEmailForm extends Component {
    state = {
        inputText: ""
    }

    handleFormSubmit = e => {

        const {inputText} = this.state

        e.preventDefault()
        console.log(isEmail(inputText))
        isEmail(inputText) ? this.sendSlackInvite(inputText) : this.displayInputError()

    }

    handleInputChange = e => {

        this.setState({
            inputText: e.target.value
        })
        
    }

    sendSlackInvite = (email) => {
        const inviteApi = `https://slack.com/api/users.admin.invite?resend=true&token=${slackToken}&email=${email}&channels=C2C6PRY0Y`
        axios.get(inviteApi)
            .then(res => {
                console.log(res.data)
            })
            .catch(e => {
                console.log('uh, something went wrong on our end')
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