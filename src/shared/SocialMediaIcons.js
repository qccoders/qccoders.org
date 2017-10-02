import React from 'react'
import PropTypes from 'prop-types'
import {SocialIcons} from 'react-social-icons';

//styles
import '../styles/SocialMediaIcons.css'

const SocialMediaIcons = props => (
    <div className='SocialMediaIcons'>
    <SocialIcons urls={props.urls}/>
   </div>
);

SocialMediaIcons.propTypes = {
    urls:PropTypes.array.isRequired
}

export default SocialMediaIcons
