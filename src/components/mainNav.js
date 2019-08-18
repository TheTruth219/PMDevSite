import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const LinkBase = styled.li`
  padding-left:1em;
  margin-top:1em;
  margin-bottom:1em;

  a{
    text-decoration:none;
    color: grey;
  }

`
export default function MainNav ({data,main}) {
  let pageNavLinks;
  
  if (main) {
      pageNavLinks = data.map( (header,index) => 
      <LinkBase key={index}><Link to={header !== "Home" && header !== "Blog"? "/#"+header: header ==="Home"? "/":"/"+header}>{header}</Link></LinkBase>)
  } else {
    pageNavLinks = data.map( (header,index) => 
      <LinkBase key={index}><Link to={header === "Home"?"/":"/#"+header}>{header}</Link></LinkBase>)
  }
      
  

return (
  <nav style={{backgroundColor:"black"}}>
    <ul style={{display:"flex", listStyleType:"none",marginBottom:"0"}}>{pageNavLinks}</ul> 
  </nav>
)

};


MainNav.propTypes = {
  data: PropTypes.array,
}

