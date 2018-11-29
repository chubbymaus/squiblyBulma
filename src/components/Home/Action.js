import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const ActionWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 2.5rem;

  .card {
  box-shadow: none;
}
    hr{
        
        height: 5px;
        color: #2a3443;
        background: #2a3443;
        border: none;
        max-width: 75px;
        margin:0;
        margin-bottom: 15px;
    }

    .title{
        
        margin-bottom: 10px;
    }
    .card-content{
        padding-left: 0px;
    }

  @media only screen and (max-width: 797px){
    padding-left: 25px;
    padding-right: 15px;
  }
`
const Action = () => (
    <div>
        
        <ActionWrapper className="has-background-info">
            <div className="container">
                <div className="columns features">
                    <Fade left>
                    <div className="column is-half">
                        <h4 className="has-text-white title">
                        Squibly is a peer-to-peer collaboration hub built on a blockchain to make all your communications, 
                        file sharing, and file storing more transparent, safer, and faster.
                        </h4>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="column is-half">
                        <h2 className="title has-text-primary">
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
                                <button className="button is-primary is-medium is-fullwidth" type="submit">
                                Submit
                                </button>
                            </p>
                    </div>
                    </form>
                    </div>
                    </Fade>
                   </div>

                
                
            </div>
        </ActionWrapper>
    </div>
)

export default Action