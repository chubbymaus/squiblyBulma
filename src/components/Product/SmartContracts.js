import React from 'react'

import Fade from 'react-reveal/Fade';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const SmartContracts = () => (
    <div>
        <div className="has-background-info product-section">
            <div className="container">
                <div className="columns">
                    <Fade left>
                    <div className="column is-half is-flex" style={{flexDirection: "column", justifyContent:"flex-start"}} id="contracts">
                        <h4 className="has-text-white has-text-weight-light title">
                        Smart Contracts  <strong style={{fontSize: '2.5rem'}}>|</strong> &nbsp;<FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'handshake']} /> 
                        </h4>
                        <p className="has-text-white">What if your collaboration software could also execute key business transactions? Wouldn't that make life easier? This is why we are building a comprehensive Smart Contract Application right into our product. We will do all of the heavy lifting while you just input the aspects of your contract that need to be executed. </p>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="column is-half is-flex" style={{flexDirection: "column", justifyContent:"flex-start"}} id="apps">
                        <h4 className="has-text-white has-text-weight-light title">
                        <FontAwesomeIcon style={{fontSize: '2rem'}} icon={['far', 'plug']} /> <strong style={{fontSize: '2.5rem'}}>|</strong> 3rd Party Applications
                        </h4>
                        <p className="has-text-white">Our goal is to create the best one-stop-shop on the market for collaboration. To do that we have opened our API to 3rd party developers so you can continue to use the tools you know and love within your business. </p>
                    </div>
                    </Fade>
                   </div>
            </div>
        </div>
    </div>
)

export default SmartContracts