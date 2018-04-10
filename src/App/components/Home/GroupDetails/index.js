import React from 'react'
import FormattedParagraph from '../../../services/FormattedParagraph'
import {groupDetailsIntro} from '../../../data/groupDetailsText' 

//styles
import './index.css'

const GroupDetails = props => (
  <div className="GroupDetails">
    <h1>Who are we? Glad you asked!</h1>
    <FormattedParagraph text={groupDetailsIntro} />
  </div>
)

export default GroupDetails
