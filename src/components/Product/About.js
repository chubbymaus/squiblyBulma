import React from 'react'

import Fade from 'react-reveal/Fade';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const Action = () => (
    <div>
        
        <div className="action-wrapper has-background-info">
            <div className="container ">
                <div className="columns">
                    <Fade left>
                    <div className="column is-half is-flex" style={{flexDirection: "column", justifyContent:"center"}}>
                        <h4 className="has-text-white has-text-weight-light title">
                        Squibly is the next <br/>generation of collaborative tools
                        </h4>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="column is-half">
                        <div className="columns has-text-white ">
                          <div className="column is-half">
                            <div className="about-icons"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'analytics']} /> &nbsp;Simple User Interface
                            </div>
                            <div className="about-icons"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'analytics']} /> &nbsp;Cryptography
                            </div>
                            <div className="about-icons"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'analytics']} /> &nbsp;P2P Network
                            </div>
                            <div className="about-icons"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'analytics']} /> &nbsp;Digital Signatures
                            </div>
                          </div>
                          <div className="column is-half">
                            <div className="about-icons"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'analytics']} /> &nbsp;Distributed File System
                            </div>
                            <div className="about-icons"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'analytics']} /> &nbsp;Squibly Explorer
                            </div>
                            <div className="about-icons"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'analytics']} /> &nbsp;Smart Contracts
                            </div>
                            <div className="about-icons"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'analytics']} /> &nbsp;3rd Party Applications
                            </div>
                          </div>
                        </div>

                    </div>
                    </Fade>
                   </div>

                
                
            </div>
        </div>
    </div>
)

export default Action