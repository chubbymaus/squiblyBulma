import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import {
  library,
 
} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {
  far
} from '@fortawesome/pro-regular-svg-icons'

import Navbar from './Navbar'
import Footer from './Footer'

import './styles.scss'
library.add(far, fab)

const BlogLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query PostExcerptQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Navbar />
 
        <div className="blog-content container">
          <div className="">
          {children}
          </div>
        </div>
        <Footer />
      </>
    )}
  />
)

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default BlogLayout