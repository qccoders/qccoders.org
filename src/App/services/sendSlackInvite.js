import axios from 'axios'
import credentials from '../credentials'

export const sendSlackInvite = (email = '') => {

    const inviteApi = `https://slack.com/api/users.admin.invite?resend=true&token=${credentials.slackToken}&email=${email}&channels=C2C6PRY0Y`
    console.log(credentials.slackToken)
    return axios.get(inviteApi)
        .then(res => res.data.ok)
        .catch(e => {

            console.log('uh, something went wrong on our end')
            
        })
}