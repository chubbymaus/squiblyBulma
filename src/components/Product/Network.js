import React from 'react'

import Fade from 'react-reveal/Fade';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const Network = () => (
    <div>
        <div className="has-background-primary product-section">
            <div className="container">
                <div className="columns">
                    <Fade left>
                    <div className="column is-half is-flex" style={{flexDirection: "column", justifyContent:"center"}} id="network">
                        <h4 className="has-text-white has-text-weight-light title">
                        P2P Network
                        </h4>
                        <p className="has-text-white">Why put all of your trust into a third-party server when you can control the entire process yourself? With Squibly you can do just that. We take the third-parties out of it and give control back to you, the client. Whether you utilize your own server network or own rented cloud space, Squibly can be your protective layer of security for every transaction within your business. Every transaction is decentralized on your own P2P network giving you the control you need to maintain the security and transparency needed to run your business and protect your data.</p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="column is-half is-flex" style={{flexDirection: "column", justifyContent:"center"}} id="distributed">
                        <h4 className="has-text-white has-text-weight-light title">
                        Distributed File System
                        </h4>
                        <p className="has-text-white">Sometimes storing everything you have in one place is risky, especially when it comes to your sensitive data. By layering a distributed file storage system onto the Squibly network we can secure that data for you even further. Files are shredded into smaller pieces and stored across your decentralized network so no one person or server is storing the entire file. When you add on Squibly's cryptography throughout the system, your files are truly secure and can only be accessed by those who allow permission to do so. </p>
                    </div>
                    </Fade>
                   </div>
            </div>
        </div>
    </div>
)

export default Network