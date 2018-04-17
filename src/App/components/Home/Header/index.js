import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import logo1 from '../../../img/carousel/anniversary_cake.jpg'
import logo2 from '../../../img/carousel/casual.jpg'
import logo3 from '../../../img/carousel/presentation.jpg'
import logo4 from '../../../img/logos/qccoder_logo.png'

//styles
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './index.css'

export default (props) => (
  <Carousel showStatus={false} infiniteLoop={true} showArrows={false} autoPlay={true} dynamicHeight={true} showThumbs={false}>
    <div>
      <img src={logo1} alt='anniversary cake'/>
      <p></p>
    </div>
   
    <div>
      <img src={logo3} alt='meetup presentation'/>
      <p></p>
    </div>
  </Carousel>
)