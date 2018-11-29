import React from 'react'
import styled from 'styled-components'
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

const AdvantageWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 2.5rem;
  padding-left:0px;

 .card {
  box-shadow: none;
}
  img{
      max-height: 48px;
  }
    hr{
        
        height: 5px;
        color: #31c56e;
        background: #31c56e;
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
const Advantage = () => (
    <div id="about">
        <AdvantageWrapper className="has-background-white">
            <div className="container">
              <h1 className="title" id="advantageTitle">Allow Squibly to become your Competitive Advantage</h1>
                <br />
                <div className="columns features">
                    <div className="column is-half">
                        <div className="card has-background-white">
                           
                            <div className="card-content has-text-primary">
                                <div className="title has-text-primary">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'code']} />
                                    &nbsp; 
                                    Engineering
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
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'money-bill-wave']} />
                                    &nbsp; 
                                    Finance
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
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'handshake']} />
                                    &nbsp; 
                                    Sales
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
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'bullseye-arrow']} />
                                    &nbsp; 
                                    Marketing
                                </div>
                                <hr/>
                                <div className="content">
                                    <p>Keep the big news to yourself until the world is ready.</p>
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
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'shield']} />
                                    &nbsp; 
                                    IT
                                </div>
                                <hr/>
                                <div className="content">
                                    <p>Know about issues as soon as they happen to keep business flowing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half">
                        <div className="card has-background-white">
                           
                            <div className="card-content has-text-primary">
                                <div className="title has-text-primary">
                                <FontAwesomeIcon style={{fontSize: '2.5rem'}} icon={['far', 'briefcase']} />
                                    &nbsp; 
                                   Human Resources
                                </div>
                                <hr/>
                                <div className="content">
                                    <p>Know who is talking and what they are talking about. Know what is going on in your business always.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </AdvantageWrapper>
    </div>
)

export default Advantage