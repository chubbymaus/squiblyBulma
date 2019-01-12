import React from 'react'

import Fade from 'react-reveal/Fade';
import ExplorerImage from '../../images/explorer.png';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const Explorer = () => (
    <div>
        <div className="has-background-success product-section">
            <div className="container" id="explorer">
                <div className="columns">
                <Fade left>
                    <div className="column is-half has-text-right" id="hero-image">
                        <img src={ExplorerImage} alt="Hero" />
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="column is-half is-flex" style={{flexDirection: "column", justifyContent:"center"}}>
                        <h4 className="has-text-white has-text-weight-light title">
                        <FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'th-list']} /> <strong style={{fontSize: '2.5rem'}}>|</strong> Squibly Explorer
                        </h4>
                        <p className="has-text-white">Have you ever wondered what it would be like to have total transparency within your organization? With the Squibly Explorer you will have just that. We have created a private ledger to track transactions within your organization and have created a legal audit trail if a leak ever occurs. This way, you know where all of your data is, and who is sharing it.</p>
                    </div>
                    </Fade>
                    
                   </div>
            </div>
        </div>
    </div>
)

export default Explorer