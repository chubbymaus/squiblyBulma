import React from 'react'

import Fade from 'react-reveal/Fade';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const Explorer = () => (
    <div>
        <div className="has-background-success product-section">
            <div className="container">
                <div className="columns">
                    <Fade left>
                    <div className="column is-half is-flex" style={{flexDirection: "column", justifyContent:"center"}}>
                        <h4 className="has-text-white has-text-weight-light title">
                        Squibly Explorer
                        </h4>
                        <p className="has-text-white">Have you ever wondered what it would be like to have total transparency within your organization? With the Squibly Explorer you will have just that. We have created a private ledger to track transactions within your organization and have created a legal audit trail if a leak ever occurs. This way, you know where all of your data is, and who is sharing it.</p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="column is-half is-flex" style={{flexDirection: "column", justifyContent:"center"}}>
                        <h4 className="has-text-white has-text-weight-light title">
                        Distributed File System
                        </h4>
                        <p className="has-text-white"> </p>
                    </div>
                    </Fade>
                   </div>
            </div>
        </div>
    </div>
)

export default Explorer