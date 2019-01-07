import React from 'react'
import styled from 'styled-components';

const Button = styled.a.attrs({
    className: 'button',
})`
    min-width: 180px;
    margin-top: .5rem;
    margin-bottom: .5rem;
    margin-right: 1rem;
    
  @media only screen and (max-width: 600px){
      width: 100%;
  }
`;

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width: 600px){
      flex-direction: column;
    }
`;



const CallToAction = () => (

    <section className="hero has-background-primary is-medium is-bold" id="about-section">
        <div className="hero-body">
            <div className="container has-text-centered">        
              <h2 className="has-text-weight-light title has-text-primary">
                  Ready to put your business on the most secure collaboration platform on the market? Good! Request our demo and lets get started!
              </h2>
              <ButtonGroup>
                <Button className="is-info shadowed is-medium" href="#about">
                  Request Demo
                </Button>
              </ButtonGroup>
            </div>
        </div>
    </section>

)

export default CallToAction;