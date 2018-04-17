import React from 'react'
import SocialMediaIcons from '../SocialMediaIcons'
import socialMediaUrls from '../SocialMediaIcons/urls'
import FormattedParagraph from '../../services/FormattedParagraph'
import {groupContactInfo} from '../../data/groupContactText'

//styles
import './index.css'
import SlackEmailForm from '../NavBar/SlackEmailForm';

export default props => (
  <div className='container-flud Footer'>
    <SocialMediaIcons urls={socialMediaUrls}/>
    <SlackEmailForm/>
    <p className="contact-info">{groupContactInfo}</p>
  </div>
)