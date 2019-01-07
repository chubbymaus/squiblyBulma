import React from 'react'

import Fade from 'react-reveal/Fade';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const Crypto = () => (
    <div>
        <div className="has-background-info">
            <div className="container">
                <div className="columns">
                    <Fade left>
                    <div className="column is-half is-flex" style={{flexDirection: "column", justifyContent:"center"}}>
                        <h4 className="has-text-white has-text-weight-light title">
                        Cryptography
                        </h4>
                        <p className="has-text-white">Squibly is the first collaborative tool to deploy top-of-the-line cryptography into every communication and file sharing transaction. Security so easy your grandma could use it.</p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="column is-half is-flex" style={{flexDirection: "column", justifyContent:"center"}}>
                        <h4 className="has-text-white has-text-weight-light title">
                        Digital Signatures
                        </h4>
                        <p className="has-text-white">By attaching a legal digital signature to every transaction everyone in the network is verified and held accountable for their actions. No longer will you have to worry about finding a leak within your organization.</p>
                    </div>
                    </Fade>
                   </div>

                
                
            </div>
        </div>
    </div>
)

export default Crypto