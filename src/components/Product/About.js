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
                            <a href="#interface"><div className="about-icons has-text-white"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'laptop']} /> &nbsp;Simple User Interface
                            </div></a>
                            <a href="#cryptography"><div className="about-icons has-text-white"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'lock-alt']} /> &nbsp;Cryptography
                            </div></a>
                            <a href="#network"><div className="about-icons has-text-white"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'users']} /> &nbsp;P2P Network
                            </div></a>
                            <a href="#signatures"><div className="about-icons has-text-white"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'signature']} /> &nbsp;Digital Signatures
                            </div></a>
                          </div>
                          <div className="column is-half">
                            <a href="#distributed"><div className="about-icons has-text-white"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'chart-network']} /> &nbsp;Distributed File System
                            </div></a>
                            <a href="#explorer"><div className="about-icons has-text-white"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'th-list']} /> &nbsp;Squibly Explorer
                            </div></a>
                            <a href="#contracts"><div className="about-icons has-text-white"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'handshake']} /> &nbsp;Smart Contracts
                            </div></a>
                            <a href="#apps"><div className="about-icons has-text-white"><FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'plug']} /> &nbsp;3rd Party Applications
                            </div></a>
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