import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const LinkBase = styled.li`
 
  padding-left:1em;
  margin-top:1em;
  margin-bottom:1em;


  a{
    text-decoration:none;
    color: white;
  }

`
export default function MainNav ({data,main}) {

  let pageNavLinks;
  let path = window.location.pathname;
  
  if (main) {
      pageNavLinks = data.map( (header,index) => 
      <LinkBase key={index}><AniLink fade to={header !== "Home" && header !== "Blog"? path+"#"+header.toLowerCase(): header ==="Home"? "/":"/"+header.toLowerCase()}>{header}</AniLink></LinkBase>)
  } else {
    pageNavLinks = data.map( (header,index) => 
      <LinkBase key={index}><AniLink fade to={header !== "Home" && header !== "Blog"? path+"#"+header.toLowerCase(): header ==="Home"? "/":"/"+header.toLowerCase()}>{header}</AniLink></LinkBase>)
  }
      
  

return (
  <nav style={{backgroundColor:"black", position:`fixed`,top:`0`,minWidth:`100vw`}}>
    <ul style={{display:"flex", listStyleType:"none",marginBottom:"0",maxWidth:"1200px"}}>{pageNavLinks}</ul> 
  </nav>
)

};


MainNav.propTypes = {
  data: PropTypes.array.isRequired,
}

