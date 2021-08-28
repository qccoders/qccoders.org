import styles from './About.module.scss'
import { TextInput, Button, EnvelopeIcon, toaster } from 'evergreen-ui'
import { useContext, useState } from 'react'
import { HomeContext } from '../../contexts/HomeContext/HomeContext'

const fetchInvite = async email =>
  fetch(
    `https://slack.com/api/users.admin.invite?resend=true&token=${process.env.NEXT_PUBLIC_SLACK_TOKEN}&email=${email}&channels=C2C6PRY0Y`
  )

const About = () => {
  const { email, setEmail, isEmailValid } = useContext(HomeContext)
  const [isLoading, setIsLoading] = useState(false)

  const failInvite = () =>
    toaster.danger('Unable to send Slack invite, try again.', {
      duration: 2,
    })

  return (
    <div className={styles.container}>
      <div>
        <h1>Who are we? Glad you asked!</h1>
      </div>
      <div>
        <p>
          QC Coders is an all-inclusive local community group for any computer
          programmers, software developers, software engineers, web developers,
          or anyone interested in coding. This group is primarily comprised of
          coders around the Quad-City IA/IL area. Each month we host open
          invitation coding meetups where we talk about hot industry trends,
          code challenges, code discussions, and so much more. Check out our
          upcoming events and plan to join us for a friendly, fun, and laid back
          code talk! All experience levels are welcome!
        </p>
      </div>
      <div className={styles.invite}>
        <TextInput
          name="email"
          placeholder="your-email@email.com"
          onChange={e => {
            setEmail(e.target.value)
          }}
          value={email}
          marginRight={8}
        />
        <Button
          onClick={() => {
            if (isEmailValid) {
              setIsLoading(true)
              fetchInvite(email)
                .then(res => res.json())
                .then(
                  json => {
                    setIsLoading(false)
                    json.ok
                      ? toaster.success('See you on Slack!', { duration: 2 })
                      : failInvite()
                  },
                  () => {
                    setIsLoading(false)
                    failInvite()
                  }
                )
            } else {
              toaster.danger('Enter a valid email to join Slack.', {
                duration: 2,
              })
            }
          }}
          appearance={isLoading ? '' : 'primary'}
          iconAfter={isLoading ? null : EnvelopeIcon}
          isLoading={isLoading}
        >
          Join Slack
        </Button>
      </div>
    </div>
  )
}

export default About
