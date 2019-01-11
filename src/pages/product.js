import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Jumbotron from '../components/Product/Jumbotron'


import About from '../components/Product/About';
import Info from '../components/Product/Info';
import Network from '../components/Product/Network';
import Crypto from '../components/Product/Crypto';
import SmartContracts from '../components/Product/SmartContracts';
import CallToAction from '../components/Product/CallToAction';
import Explorer from '../components/Product/Explorer';

// if (typeof window !== 'undefined') {
//   // Make scroll behavior of internal links smooth
//   // eslint-disable-next-line global-require
//   require('smooth-scroll')('a[href*="#"]');
// }
const ProductPage = () => (
  <Layout>
    
    <Jumbotron />
    <About />
    <Info />
    <Crypto />
    <Network />
    <Explorer />
    <SmartContracts />
    <CallToAction />
  </Layout>
)

export default ProductPage
