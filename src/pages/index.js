import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Jumbotron from '../components/Home/Jumbotron'
import Action from '../components/Home/Action'
// import Prototyping from '../components/Home/Prototyping';
import About from '../components/Home/About';
import Advantage from '../components/Home/Advantage';
// import Portfolio from '../components/Home/Portfolio';

const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <Action />
    <About />
    <Advantage />
    
  </Layout>
)

export default IndexPage
