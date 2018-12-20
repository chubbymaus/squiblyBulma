import React from 'react'
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'


const Advantage = () => (
    <div id="about">
        <div className="advantage-wrapper has-background-white">
            <div className="container">
              <h1 className="title" id="advantageTitle">
                What we need funding for...
              </h1>
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
                                    <p>In order to be the best you have to hire the best. We are looking for the best engineers,
                                    product managers, marketers, and sales people in the business. With the right funding, we
                                    believe we can do just that.</p>
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

                                    <p>The sales process has become increasingly hands-on. From developing leads to closing deals,
                                    we need the resources to grow our business one sale at a time.</p>
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
                                    <p>The office is no longer just a place with a desk and a computer. It is a place to create and do
                                    your best work day-in and day-out. To attract and keep the best talent in the world, we need
                                    top-of-the-line workspaces and tools.</p>
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
                                    <p>We are just getting started, but we have big dreams We are always looking to grow through
strategic partnerships, investors, and mentors. You know anybody?</p>
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