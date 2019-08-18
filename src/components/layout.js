/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import MainNav from "./mainNav"
import Contact from "./contact"
import "./layout.css"


const Layout = ({ data,children,main }) => {
 
  return (
    
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <MainNav main={main} data={data}/>
      <div
        style={{
          margin: `auto`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Contact/>
        <footer style={{
          margin:`auto`,
          textAlign:`center`,
          backgroundColor: `black`,
          color: `white`
        }}>
          © {new Date().getFullYear()}, Stephen Powers
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
