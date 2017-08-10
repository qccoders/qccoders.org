import React from 'react'
import {Link} from 'react-router-dom'
import FormattedParagraph from '../shared/FormattedParagraph'
import { SocialIcon } from 'react-social-icons';
import {groupDetailsIntro} from '../data/groupDetailsText'


const GroupDetails = props => (
  <div className="GroupDetails">
    <FormattedParagraph text={groupDetailsIntro} />
  Want more information? Check us out online at any of the following:
    <SocialIcon url="https://www.meetup.com/QCCoders" />
    <SocialIcon url="https://www.facebook.com/qccoders" />
    <SocialIcon url=" https://github.com/qccoders" network="github"/>
    <SocialIcon url="https://www.youtube.com/channel/UCj0ulaio6fCqFSV5_4P5zNg" />
  Have questions? Reach out to us at info@qccoders.org.
  </div>
)

export default GroupDetails
