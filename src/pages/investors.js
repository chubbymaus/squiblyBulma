import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Jumbotron from '../components/Investor/Jumbotron'
import Action from '../components/Investor/Action'


import Advantage from '../components/Investor/Advantage';

// if (typeof window !== 'undefined') {
//   // Make scroll behavior of internal links smooth
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }
const IndexPage = () => (
  <Layout>
    <Jumbotron />
    <Action />
    <Advantage />
  </Layout>
)

export default IndexPage
