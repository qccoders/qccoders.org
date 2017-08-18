import axios from 'axios'

export const sendSlackInvite = (email = '', token = '') => {

    const inviteApi = `https://slack.com/api/users.admin.invite?resend=true&token=${token}&email=${email}&channels=C2C6PRY0Y`
    
    return axios.get(inviteApi)
        .then(res => {

            return res.data.ok
        
        })
        .catch(e => {

            console.log('uh, something went wrong on our end')

        })
}