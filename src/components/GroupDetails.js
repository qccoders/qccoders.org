import React from 'react'
import {Link} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

const GroupDetails = props => (
  <div className="GroupDetails">
  The QC Coders is an all-inclusive local community group for any computer programmers, software developers, software engineers, web developers, or anyone interested in coding. This group is primarily compromised of coders around the Quad-City IA/IL area.
  Each month we host open invitation coding meetups where we talk about hot industry trends, code challenges, code discussions, and so much more. Check out our upcoming events and plan to join us for a friendly, fun, and laid back code talk! All experience levels are welcome!
  <br/><br/>
  Want more information? Check us out online at any of the following:
    <br/><br/>
    <SocialIcon url="https://www.meetup.com/QCCoders" />
    <SocialIcon url="https://www.facebook.com/qccoders" />
    <SocialIcon url=" https://github.com/qccoders" network="github"/>
    <SocialIcon url="https://www.youtube.com/channel/UCj0ulaio6fCqFSV5_4P5zNg" />
    <br/><br/>
  Have questions? Reach out to us at info@qccoders.org.
  <br/><br/>
  </div>
)

export default GroupDetails
