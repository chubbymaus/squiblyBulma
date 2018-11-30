import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Jumbotron from '../components/Home/Jumbotron'
import Action from '../components/Home/Action'
// import Prototyping from '../components/Home/Prototyping';
import About from '../components/Home/About';
import Advantage from '../components/Home/Advantage';
// import Portfolio from '../components/Home/Portfolio';
if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]');
}
const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <About />
    <Action />
    <Advantage />
    
  </Layout>
)

export default IndexPage
