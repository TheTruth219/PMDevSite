import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from "prop-types"
import React,{Component} from "react"
import styled from "styled-components"


const LinkBase = styled.li`
 
  margin-left:1em;
  margin-top:1em;
  margin-bottom:1em;
  position:relative;


  a{
    text-decoration:none;
    color: white;
   
    &:before, &:after{
      position: absolute;
      opacity: 0;
      width: 0%;
      height: 2px;
      content: '';
      background: #FFF;
      transition: all 0.3s;
    }
    &:before{
      left: 0px;
      top: 0px;
    }
    &:after{
      right: 0px;
      bottom: 0px;
    }
    &:hover:before,&:hover:after{
      opacity: 1;
      width: 100%;  
    }
  }
  
  
  
  
  
`
export default class MainNav extends Component {

 
    
render(){
  let pageNavLinks;
  let path = window.location.pathname;
  
  if (this.props.main) {
      pageNavLinks = this.props.data.map( (header,index) => 
      <LinkBase key={index}><AniLink swipe to={header !== "Home" && header !== "Blog"? path+"#"+header.toLowerCase(): header ==="Home"? "/":"/"+header.toLowerCase()}>{header}</AniLink></LinkBase>)
  } else {
    pageNavLinks = this.props.data.map( (header,index) => 
      <LinkBase key={index}><AniLink swipe to={header !== "Home" && header !== "Blog"? path+"#"+header.toLowerCase(): header ==="Home"? "/":"/"+header.toLowerCase()}>{header}</AniLink></LinkBase>)
  }
 
    return (
      
      <nav style={{backgroundColor:"black", position:`fixed`,top:`0`,minWidth:`100vw`, zIndex:`100`}}>
        <ul style={{display:"flex", listStyleType:"none",marginBottom:"0",maxWidth:"1200px"}}>{pageNavLinks}</ul> 
      </nav>
    )
  }
};


MainNav.propTypes = {
  data: PropTypes.array.isRequired,
}

