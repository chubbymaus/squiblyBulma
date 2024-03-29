import React from 'react'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'


const About = () => (
    <div id="about" className="is-fullheight">
        
        <div className="about-wrapper has-background-primary">
            <div className="container">
            <h1 className="title has-text-white has-text-weight-bold">
                           Squibly helps boost productivity while facilitating...
                        </h1>
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
                                     and distributed file storage. Consolidate file storage and sharing with Squibly to save money while maintaining the highest levels of security.</p>
                                    <ul>
                                        <li>Distributed File Storage</li>
                                        <li>Peer-to-Peer Network</li>
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
                                    <p>Everything your team needs to collaborate in one secure place. Chat, share and store files with the security you need</p>
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