import React from 'react'
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'


const Advantage = () => (
    <div id="about">
        <div className="advantage-wrapper has-background-white">
            <div className="container">
              <h1 className="title" id="advantageTitle">Allow Squibly to become your Competitive Advantage</h1>
                <br />
                <div className="columns features">
                    <div className="column is-half">
                        <div className="card has-background-white">
                           
                            <div className="card-content has-text-primary">
                                <div className="title has-text-primary">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'users-crown']} />
                                    &nbsp; 
                                    Talent
                                </div>
                                <hr/>
                                <div className="content">
                                    <p>Write code faster without all the distractions of process. Don’t worry about leaks any longer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="card has-background-white">
                            
                            <div className="card-content has-text-primary">
                                <div className="title has-text-primary">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'funnel-dollar']} />
                                    &nbsp; 
                                    Marketing/Sales
                                </div>
                                <hr/>
                                <div className="content">

                                    <p>Collaborate sensitive information with no risk. Store company financials where only authorized personnel can see it.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   </div>
                   <div className="columns"> 
                    <div className="column is-half">
                        <div className="card has-background-white">
                            
                            <div className="card-content has-text-primary">
                                <div className="title has-text-primary">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'building']} />
                                    &nbsp; 
                                    Workspace
                                </div>
                                <hr/>
                                <div className="content">
                                    <p>Pay commissions immediately, and keep closing deals faster.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="card has-background-white">
                            
                            <div className="card-content has-text-primary">
                                <div className="title has-text-primary">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'analytics']} />
                                    &nbsp; 
                                    Growth
                                </div>
                                <hr/>
                                <div className="content">
                                    <p>Keep the big news to yourself until the world is ready.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
                
            </div>
        </div>
    </div>
)

export default Advantage