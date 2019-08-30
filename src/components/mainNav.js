import AniLink from "gatsby-plugin-transition-link/AniLink";
import PropTypes from "prop-types"
import React,{Component} from "react"
import styled from "styled-components"
import {Link} from "gatsby"


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
      transition: all 0.5s;
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
  

  componentDidMount(){
    

    // if(window){
    //   try {
    //     let path = window.location.pathname;
    //     if (this.props.main) {
    //       this.pageNavLinks = this.props.data.map( (header,index) => 
    //       <LinkBase key={index}><AniLink swipe to={header !== "Home" && header !== "Blog"? path+"/#"+header.toLowerCase(): header ==="Home"? "/":"/"+header.toLowerCase()}>{header.toUpperCase()}</AniLink></LinkBase>)
    //     } else {
    //       this.pageNavLinks = this.props.data.map( (header,index) => 
    //       <LinkBase key={index}><AniLink swipe to={header !== "Home" && header !== "Blog"? path+"/#"+header.toLowerCase(): header ==="Home"? "/":"/#"+header.toLowerCase()}>{header.toUpperCase()}</AniLink></LinkBase>)
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
    

        this.path = window.location.pathname;
        
    
  }
    
render(){
  this.pageNavLinks = this.props.data.map( (header,index)=>{
    if(header !== "Home" && header !== "Blog"){
      return <LinkBase key={index}><Link to={"/"+this.path+"/#"+header.toLowerCase()}>{header.toUpperCase()}</Link></LinkBase>
    }else{
      return <LinkBase key={index}><AniLink swipe to={header ==="Home"? "/":"/"+header.toLowerCase()}>{header.toUpperCase()}</AniLink></LinkBase>
    }
  });
    return (
      
      <nav style={{backgroundColor:"black", position:`fixed`,top:`0`,minWidth:`100vw`, zIndex:`100`}}>
        <ul style={{display:"flex", listStyleType:"none",marginBottom:"0",maxWidth:"1200px"}}>{this.pageNavLinks?this.pageNavLinks:"Sorry No Nav"}</ul> 
      </nav>
    )
  }
};


MainNav.propTypes = {
  data: PropTypes.array.isRequired,
}

