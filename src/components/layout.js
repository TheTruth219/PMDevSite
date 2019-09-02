/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Contact from "./contact"
import Nav from "./Nav"
import "./layout.css"


const Layout = ({ data,children,main,blog }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    
    <>
      <Nav main={main} data={data}/>
      <div
        style={{
          margin: `auto`,
          paddingTop: 0,
        }}
      >
        <main >{children}</main>
       {!blog? <Contact/>: false}
        <footer style={{
          margin:`auto`,
          padding:`18px`,
          textAlign:`center`,
          backgroundColor: `#13163B`,
          color: `white`
         
          
        }}>
          © {new Date().getFullYear()} All Rights Reserved.
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
