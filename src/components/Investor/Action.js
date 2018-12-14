import React from 'react'

import Fade from 'react-reveal/Fade';


const Action = () => (
    <div>
        
        <div className="action-wrapper has-background-info">
            <div className="container">
                <div className="columns ">
                   
                    <Fade right>
                    <div className="column ">
                        <h2 className="title has-text-white">
                            Request Investor Information
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
                        <div className="field">
                        <div className="control is-expanded">
                            <input className="input" type="email" name="email"placeholder="Email" />
                        </div>

                        </div>
                        <div className="field">
                        <div className="control is-expanded">
                            <input className="textarea" type="text" name="text" placeholder="Message" />
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