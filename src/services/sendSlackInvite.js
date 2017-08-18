import axios from 'axios'

export const sendSlackInvite = (email, token) => {

    const inviteApi = `https://slack.com/api/users.admin.invite?resend=true&token=${token}&email=${email}&channels=C2C6PRY0Y`
    
    axios.get(inviteApi)
        .then(res => {

            const {ok} = res.data

            ok ? console.log('success') : console.log(res.data.error)
        })
        .catch(e => {

            console.log('uh, something went wrong on our end')

        })
}