import React from 'react'

import Fade from 'react-reveal/Fade';


const Action = () => (
    <div>
        
        <div className="action-wrapper has-background-info">
            <div className="container">
                <div className="columns">
                    <Fade left>
                    <div className="column is-half">
                        <h4 style={{fontSize: '1.75rem'}} className="has-text-white has-text-weight-light">
                        Squibly is a peer-to-peer collaboration hub built on a blockchain to make all your communications, 
                        file sharing, and file storing more transparent, safer, and faster.
                        </h4>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="column is-half">
                        <h2 style={{fontSize: '1.75rem'}} className="title has-text-white has-text-weight-light">
                            See how Squibly secures your business while increasing productivity.
                        </h2>
                        <form 
                    name="callToAction" 
                    method="POST" 
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    >
                      <input type="hidden" name="form-name" value="callToAction" />
                      <input type="hidden" name="bot-field" />
                        <div className="field is-grouped">
                        <div className="control is-expanded">
                            <input className="input" type="text" name="firstName" placeholder="First Name" />
                        </div>
                        <div className="control is-expanded">
                            <input className="input" type="text"name="lastName" placeholder="Last Name" />
                        </div>
                        </div>
                        <div className="field is-grouped">
                        <div className="control is-expanded">
                            <input className="input" type="email" name="email"placeholder="Email" />
                        </div>
                        <div className="control is-expanded">
                            <input className="input" type="text" name="companyName" placeholder="Company Name" />
                        </div>
                        </div>
                        <div className="field">
                            <p className="control">
                                <button className="button is-success is-medium is-fullwidth" type="submit">
                                Submit
                                </button>
                            </p>
                    </div>
                    </form>
                    </div>
                    </Fade>
                   </div>

                
                
            </div>
        </div>
    </div>
)

export default Action