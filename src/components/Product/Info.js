import React from 'react'
// import styled from 'styled-components';
import HeroImage from '../../images/interfacesquibly.png';





const Info = () => (

    <section className="hero has-background-primary is-fullheight is-bold" id="about-section">
        <div className="hero-body">
            <div className="container has-text-left" id="interface">
                <div className="columns">
                    <div className="column is-half hero-text">
                        
                        
                        <h2 className="has-text-weight-light title has-text-primary">
                            Squibly utilizes a simple user interface that is easy to learn and easier to use. Employees will love collaborating with each other on this platform and they never have to sacrifice security
                            for work flow.
                        </h2>

                    </div>
                    <div className="column is-half has-text-right" id="hero-image">
                        <img src={HeroImage} alt="Hero" />
                    </div>
                </div>
            </div>
        </div>
    </section>

)

export default Info;