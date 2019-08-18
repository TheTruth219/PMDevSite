
import React,{Component} from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeroBase = styled.div`
min-height: 20em;
min-width: 100vw;
display:flex;
position: relative;
a {
    width: 42.5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    position:absolute
    }
.link_product{
    margin-right:auto; 
   
}
.link_dev {
    right: 0; 
   
}
.fadeOut{
    animation-name: fadeOut;
    animation-duration: 3000ms;
    animation-fill-mode: forwards;
}
@keyframes slideIn {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

`

// let prodHeader = document.querySelector(".product_header");


export default class Hero extends Component {
       
    
   render() {
       let MainHero;

       if(this.props.main){
        MainHero =   
       
        <>
            <Link  className="link_product" to="/product"><h1 className="product_header">{this.props.head_1}</h1></Link>
            
            <Link className="link_dev"to="/development"><h1 className="dev_header">{this.props.head_2}</h1></Link>
            
            <img className="hero_img1" style={{
            marginBottom: 0,
            margin:`auto`,
            minWidth:`100vw`,
            zIndex:-1
            }}alt={this.props.alt} src={this.props.src}/>
        
       </>
       } else {
         MainHero =  
        <>
           <img className="hero_img1" style={{
            marginBottom: 0,
            margin:`auto`,
            minWidth:`100vw`,
            zIndex:-1
            }}alt={this.props.alt} src={this.props.src}/>  
        </> 
       }






   return(
    <HeroBase>
        {MainHero}
    </HeroBase>
  
    
   );
  }
}


