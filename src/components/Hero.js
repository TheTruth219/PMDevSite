
import React,{Component} from "react"
import styled from "styled-components"
import { Link } from "gatsby"


const HeroBase = styled.div`
min-height: 20em;
min-width: 100vw;
display:flex;
position: relative;
background: linear-gradient(to bottom, transparent 90%,white 100%); 
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
    animation-duration: 1500ms;
    animation-fill-mode: forwards;
}
@keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .fadeIn{
    animation-name: fadeIn;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;
}
@keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

`


export default class Hero extends Component {
     
    componentDidMount(){
        const developHeader = document.querySelector(".dev_header");
        const productHeader = document.querySelector(".product_header");
        const productTrigger = document.querySelector(".link_product");
        const devTrigger = document.querySelector(".link_dev");
        
        if (productTrigger){
            productTrigger.addEventListener("mouseover",()=>{
                if(developHeader.classList.contains("fadeIn")){
                    developHeader.classList.remove("fadeIn")
                }
                developHeader.classList.add("fadeOut"); 
            });
            productTrigger.addEventListener("mouseout",()=>{
                if(developHeader.classList.contains("fadeOut")){
                    developHeader.classList.remove("fadeOut");
                }
                developHeader.classList.add("fadeIn"); 
            });
        }
        if (devTrigger){
            devTrigger.addEventListener("mouseover",()=>{
                if(productHeader.classList.contains("fadeIn")){
                    productHeader.classList.remove("fadeIn")
                }
                productHeader.classList.add("fadeOut"); 
            });
            devTrigger.addEventListener("mouseout",()=>{
                if(productHeader.classList.contains("fadeOut")){
                    productHeader.classList.remove("fadeOut");
                }
                productHeader.classList.add("fadeIn"); 
            });
        }    
    }
   
   render() {
    
    
       let MainHero;

       if(this.props.main){
        MainHero =   
       
        <>
            <Link className="link_product" to="/product"><h1 className="product_header">{this.props.head_1}</h1></Link>
            
            <Link  className="link_dev"to="/development"><h1 className="dev_header">{this.props.head_2}</h1></Link>
            
           
            <img className="hero_img1" style={{
            marginBottom: 0,
            margin:`auto`,
            marginTop:`0`,
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
            marginTop:`0`,
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


