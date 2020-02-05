import AniLink from "gatsby-plugin-transition-link/AniLink"
import Link from "gatsby-plugin-transition-link";
import { withPrefix } from "gatsby"
import PropTypes from "prop-types"
import React,{Component} from "react"
import styled from "styled-components"

const LinkBase = styled.li`
  margin-left:1em;
  margin-top:1em;
  margin-bottom:1em;
  position:relative;
  
  a{
    color:white;
    text-decoration:none;
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
    
    &:active, &:hover:before,&:hover:after{
      opacity: 1;
      width: 100%;  
      font-weight:bold;
    }
  }
  @media screen and (max-width: 700px){
    a {
      color:white;
      
      &:active, &:hover:before,&:hover:after{
        width: 0%;  
      }
    }
  }
  
  
`
const NavBarBase = styled.nav`
  display:none;
  background-color:transparent;
  position:fixed;
  top:0;
  z-index:20;
  min-width:100%;
  transition: all 0.5s;
  @media screen and (min-width: 700px){
    display:block;
  }
  .dark a{
    color: #17242E;
  }

`
const MobileNavBase = styled.nav`
  position:fixed;
  top:1;
  z-index:20;
  min-width:100%;
  transition: all 0.5s;
  background-color:black;
  overflow:hidden;
  height: 45px

  .hamburger{
    height: 2em;
    display: flex;
    align-items: center;
    padding: 25px 0 19px 10px;
    cursor: pointer;

    &_line{
      background-color: white;
      height: 2px;
      width: 25px;
      position: relative;
      transition: all .5s;
      border-radius:5px;

      &:before,&:after{
        content: " ";
        height: 2px;
        width: 25px;
        background-color: white;
        position:absolute;
        transition:all .5s;
        border-radius:5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }
      &:before{
      top:7px;        
      }
      &:after{
        top:-7px;
      }
    }
    
  }
  .hamburger.animate .hamburger_line{
    background-color:transparent;

    &:before{
      top:0px;
      transform:rotate(135deg);      
    }
    &:after{
      top:0px;
      transform:rotate(46deg); 
    }
  }
   
  @media screen and (min-width: 700px){
    display:none;
  }
`
export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state={
      expanded:false
    }
   
  }
   
    
  expand = (e)=>{
    let toggleFunction = () =>{
      this.hamburger.classList.toggle('animate');
      //Define routes that need certain navigation heights due to menu
      let routes = ["product/","development/","/blog"];
  
            if(this.path === "/" || routes.some(word => this.path.includes(word))){
              if(this.mobileNav.style.height==="250px"){
                this.mobileNav.style.height = "45px";
                this.setState({expanded:false})
                }else{
                this.mobileNav.style.height = "250px";
                this.setState({expanded:true})
                }
            }else{
              if(this.mobileNav.style.height==="400px"){
                this.mobileNav.style.height = "45px";
                this.setState({expanded:false})
              } else {
              this.mobileNav.style.height = "400px";
              this.setState({expanded:true});
              }
            }
    }
    if(e.currentTarget === this.hamburger){
      e.stopPropagation()
      toggleFunction();

             
    } else if(this.state.expanded === true) {
      toggleFunction();

    }

     
  }

  componentDidMount(){
    
      if(window){

        this.path = window.location.pathname.trim();
        
        window.onscroll = function() {scrollFunction()};
        let links = document.querySelectorAll(".links")

        let scrollFunction = () => {
          if(window.location.href.includes('product/')){
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            this.navBar.style.backgroundColor = "#ffffff8a";
            }else {
              this.navBar.style.backgroundColor = "transparent";
            }
            links.forEach(link=> {
              link.classList.add("dark");
           }); 
            }else{
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
          
          
        this.hamburger.addEventListener('click', (e) => {
          this.expand(e);  
        });
        

        window.addEventListener('click',(e) => {
          this.expand(e)
        });
        
      }
  }
 componentWillUnmount(){
   this.setState({expanded:false});
   this.hamburger.removeEventListener('click', () => {
    this.expand();  
  }); 
  window.removeEventListener('click',(e) => {
    this.expand(e)
  });
   
 }
       
render(){
  this.pageNavLinks = this.props.data.map( (header,index)=>{

    switch(header){
      case "Home":
        return <LinkBase  className="links" key={index}><AniLink fade to="/">{header.toUpperCase()}</AniLink></LinkBase>
      case "Blog":
        return <LinkBase  className="links" key={index}><AniLink swipe to={"/"+header.toLowerCase()}>{" |  " + header.toUpperCase()}</AniLink></LinkBase>
      case 'Back':
        return <LinkBase className="links" key={index}><AniLink fade to={"/product"}>{ header.toUpperCase()}</AniLink></LinkBase>
      case "Product":
      case "Development":
        return <LinkBase  className="links" key={index}><AniLink  fade to={"/"+header.toLowerCase()}>{header.toUpperCase()}</AniLink></LinkBase>
      default:
        return <LinkBase  className="links" key={index}> <Link to={withPrefix(this.path)+"#"+header.toLowerCase()}>{header.toUpperCase()}</Link></LinkBase>
    }
    
  });

    return (
      <>
        <NavBarBase  ref={nav => this.navBar = nav}>
          <ul style={{display:"flex", listStyleType:"none",marginBottom:"0",maxWidth:"1200px"}}>
            {this.pageNavLinks}
          </ul> 
        </NavBarBase>
        <MobileNavBase  ref={nav => this.mobileNav = nav} >
          <div ref={div => this.hamburger = div} className="hamburger">
            <div className="hamburger_line"></div>
          </div>
          <ul style={{display:"contents", listStyleType:"none",marginBottom:"0"}}>
            {this.pageNavLinks}
          </ul> 
        </MobileNavBase>
      </>
    )
  }
};


Nav.propTypes = {
  data: PropTypes.array.isRequired,
}

