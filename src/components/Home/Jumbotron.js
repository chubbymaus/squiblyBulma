import React from 'react'
// import Link from 'gatsby-link';
import styled from 'styled-components';
import HeroImage from '../../images/computers.png';

const Button = styled.a.attrs({
    className: 'button',
})`
    width: 180px;
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
    justify-content: flex-start;

    @media only screen and (max-width: 600px){
      flex-direction: column;
    }
`;



const Jumbotron = () => (

    <section className="hero has-background-primary is-fullheight is-bold" id="about-section">
        <div className="hero-body">
            <div className="container has-text-left">
                <div className="columns">
                    <div className="column is-half hero-text">
                        
                        <h1 className="title has-text-primary has-text-weight-bold">
                           Your Secrets On The Blockchain
                        </h1>
                        <h2 className="has-text-weight-light subtitle has-text-primary">
                            Collaborate, store, and share faster, safer, and more transparently
                        </h2>
                        <ButtonGroup>
                        <Button className="is-info shadowed is-medium" href="#about">Learn More</Button>
                        <Button className="is-success shadowed is-medium">View My Blog</Button>
                        </ButtonGroup>
                    </div>
                    <div className="column is-half has-text-right" id="hero-image">
                        <img src={HeroImage} alt="Hero" />
                    </div>
                </div>
            </div>
        </div>
    </section>

)

export default Jumbotron;