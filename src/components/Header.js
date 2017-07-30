import React, { Component } from 'react'
import Particles from 'react-particles-js'
import '../styles/Header.css'

class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <Particles params={{
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable:true,
                                mode: 'grab'
                            }
                        }    
                    },
                    particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#3339D1",
                                blur: 5
                            }
                        }
                    }
                }}/>
            </div>
        )
    }
}   
export default Header
