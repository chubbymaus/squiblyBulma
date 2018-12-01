import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';
import HeroImage from '../../images/computers.png';


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
                        <div className="is-info jumbotron-button button shadowed is-medium" href="#about">Learn More</div>
                        <Link to="/contact"><div className="is-success shadowed jumbotron-button button is-medium">Request a Demo</div></Link>
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