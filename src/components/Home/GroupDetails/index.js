import React from 'react'
import FormattedParagraph from '../../../services/FormattedParagraph'
import {groupDetailsIntro} from '../../../data/groupDetailsText'
import SocialMediaIcons from '../../../shared/SocialMediaIcons'
import socialMediaUrls from '../../../shared/SocialMediaIcons/urls' 
import {groupContactInfo} from '../../../data/groupContactText'

const GroupDetails = props => (
  <div className="GroupDetails">
    <FormattedParagraph text={groupDetailsIntro} />
    <p>Want more information? Check us out online at any of the following:</p>
    <SocialMediaIcons urls={socialMediaUrls}/>
    <FormattedParagraph text={groupContactInfo} />
  </div>
)

export default GroupDetails
