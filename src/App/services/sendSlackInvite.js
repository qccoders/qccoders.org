import axios from 'axios'
import credentials from '../credentials'

export const sendSlackInvite = (email = '') => {

    const inviteApi = `https://slack.com/api/users.admin.invite?resend=true&token=${credentials.slackToken}&email=${email}&channels=C2C6PRY0Y`
    return axios.get(inviteApi)
        .then(res => res.data.ok)
        .catch(e => {

            console.log('uh, something went wrong on our end')
            
        })
}