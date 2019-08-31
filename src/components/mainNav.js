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
    color:white;
    &:before, &:after{
      position: absolute;
      opacity: 0;
      width: 0%;
      height: 2px;
      content: '';
      background: white;
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
const NavBarBase = styled.nav`
  background-color:transparent;
  position:fixed;
  top:0;
  z-index:100;
  min-width:100vw;
  transition: all 0.3s;
  
  .dark a{
    color: #17242E;
  }

`
export default class MainNav extends Component {
    constructor(props){
      super(props);
      this.navBar =null;
      
    }

  componentDidMount(){
    

        this.path = window.location.pathname;
        
        window.onscroll = function() {scrollFunction()};
        let links = document.querySelectorAll(".links")

        let scrollFunction = () => {
          if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            this.navBar.style.backgroundColor = "#ffffff8a";
            links.forEach(link=> {
              link.classList.add("dark");
            });
            
      
          } else {
            this.navBar.style.backgroundColor = "transparent";
            links.forEach(link=> {
              link.classList.remove("dark");
            });
           
          }
        }
    
  }
    
render(){
  this.pageNavLinks = this.props.data.map( (header,index)=>{
    if(header !== "Home" && header !== "Blog"){
      return <LinkBase className="links" key={index}><Link to={"/"+this.path+"/#"+header.toLowerCase()}>{header.toUpperCase()}</Link></LinkBase>
    }else if(header ==="Home"){
      return <LinkBase className="links" key={index}><AniLink swipe to="/">{header.toUpperCase()}</AniLink></LinkBase>
    }else{
      return <LinkBase className="links" key={index}><AniLink swipe to={"/"+header.toLowerCase()}>{" |  " + header.toUpperCase()}</AniLink></LinkBase>
      
    }
  });
    return (
      
      <NavBarBase ref={nav => this.navBar = nav}>
        <ul style={{display:"flex", listStyleType:"none",marginBottom:"0",maxWidth:"1200px"}}>
          {this.pageNavLinks}
        </ul> 
      </NavBarBase>
    )
  }
};


MainNav.propTypes = {
  data: PropTypes.array.isRequired,
}

