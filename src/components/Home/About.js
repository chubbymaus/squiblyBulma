import React from 'react'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'


const About = () => (
    <div id="about">
        
        <div className="about-wrapper has-background-primary">
            <div className="container">
                <div className="columns features">
                    <div className="column is-half">
                        <div className="card has-background-primary">
                            <div className="card-image has-text-left">
                                <h3>
                                </h3>
                                    
                            </div>
                            <div className="card-content has-text-white">
                                <div className="title has-text-white">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'lock-alt']} />
                                    &nbsp; Security 
                                </div>
                                <hr/>
                                <div className="content">
                                    <p>End-to-end encryption on a peer-to-peer network,
                                     and distributed file storage.</p>
                                    <ul>
                                        <li>Distributed File Storage</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="card has-background-primary">
                            <div className="card-image has-text-left">
                                {/* <img src={TransparencyIcon} alt="transparency icon" /> */}
                            </div>
                            <div className="card-content has-text-white">
                                <div className="title has-text-white">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'folders']} />
                                    &nbsp; 
                                    Transparency
                                </div>
                                <hr/>
                                <div className="content">

                                    <p>Digital signatures eliminate phishing and notarize all actions on the network.</p>
                                    <ul>
                                        <li>Squibly Explorer</li>
                                        <li>Digital Signatures</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                   <div className="columns"> 
                    <div className="column is-half">
                        <div className="card has-background-primary">
                            <div className="card-image has-text-left">
                                {/* <img src={CollabIcon} alt="collab icon" /> */}
                            </div>
                            <div className="card-content has-text-white">
                                <div className="title has-text-white">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'comments']} />
                                    &nbsp; 
                                    Collaboration
                                </div>
                                <hr/>
                                <div className="content">
                                    <p>Organized chat, file sharing, and app integration in one place.</p>
                                    <ul>
                                        <li>Chat/File Sharing</li>
                                        <li>App Integration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="card has-background-primary">
                            <div className="card-image has-text-left">
                                {/* <img src={TransactionsIcon} alt="transactions icon" /> */}
                            </div>
                            <div className="card-content has-text-white">
                                <div className="title has-text-white">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'exchange']} />
                                    &nbsp; 
                                    Transactions
                                </div>
                                <hr/>
                                <div className="content">
                                    <p>Reduce reliance on trusted intermediaries and lower transaction costs.</p>
                                    <ul>
                                        <li>Smart Contracts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
)

export default About