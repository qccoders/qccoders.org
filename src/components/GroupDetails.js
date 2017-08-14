import React from 'react'
import {Link} from 'react-router-dom'
import FormattedParagraph from '../shared/FormattedParagraph'
import {groupDetailsIntro} from '../data/groupDetailsText'
import SocialMediaIcons from '../shared/SocialMediaIcons'
import socialMediaUrls from '../data/socialMediaIcons'
import socialMediaNetwork from '../data/socialMediaIcons'
import {groupContactInfo} from '../data/groupContactText'
import '../styles/SocialMediaIcons.css'

const GroupDetails = props => (
  <div className="GroupDetails">
    <FormattedParagraph text={groupDetailsIntro} />
    <p>Want more information? Check us out online at any of the following:</p>
    <SocialMediaIcons urls={socialMediaUrls} network={socialMediaNetwork}/>
    <FormattedParagraph text={groupContactInfo} />
  </div>
)

export default GroupDetails
