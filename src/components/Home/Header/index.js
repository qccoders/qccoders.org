import React, { Component } from 'react'
import Particles from 'react-particles-js'
import './index.css'
import logo from '../../../img/qccoders_logo.jpg'

class Header extends Component {
  render() {
    return (
      <div className='particle-header'>
          <div className='Header'>
              <Particles 
                  params={{
                      interactivity: {
                        detect_on: 'canvas',
                        events: {
                          onhover: {
                            enable:true,
                            mode: 'grab'
                          }
                        }
                      },
                      line_linked: {
                        shadow: {
                          enable: true,
                          color: "#3339D1",
                          blur: 5
                        }
                      }
                  }}
              style={{
                background: '#11344b',
                width: '100%'
              }}
              height='300px'
              />
          </div>
      </div>   
    )
  }
}

export default Header
