import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons'
import socialMediaUrls from '../SocialMediaIcons/urls'
import FormattedParagraph from '../../services/FormattedParagraph'
import {groupContactInfo} from '../../data/groupContactText'

//styles
import './index.css'

export default props => (
  <div className='container-flud Footer'>
    <SocialMediaIcons urls={socialMediaUrls}/>
    <FormattedParagraph text={groupContactInfo} />
  </div>
)