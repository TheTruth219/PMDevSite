
import React,{Component} from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import HeroImage from "./low-level/heroImage"
// import TweenLite from "gsap"




const HeroBase = styled.section` 

display:flex;
position: relative;
align-items:center;
margin:auto;
margin-top:40px;
justify-content:center;


.hero_img1,.hero_img2,.hero_base{
    margin:auto; 
    position:absolute;
    bottom:0;
    min-width:80vw;
    } 
.hero_img1 {
    opacity:0;
    z-index:-2;
}
.hero_img2 {
    opacity:0;
    z-index:-4;
}
.hero_base{
    opacity:1;
    z-index:-3;
}
a {
    width: 38.5%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    position:absolute
    }
.link_product{
    left:0;

}
.link_dev {
    right: 0; 
   
}
.fadeOut{
    animation-name: fadeOut;
    animation-duration: 1500ms;
    animation-fill-mode: forwards;
    animation-delay: .3s;
    animation-timing-function: ease-in-out
    
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
    animation-duration: 1500ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out
}
@keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
@media screen and (max-width: 610px){
    .hero_children{
        display:none;
    }
}

`


export default class Hero extends Component {

    constructor(props){
        super(props);
        this.developHeader = null;
        this.productHeader = null;
        this.productAnimate = null;
        this.devAnimate = null;
        this.animationBase = null;

    }
    
    componentDidMount(){
      
        let productTrigger = document.querySelector(".link_product");
        let devTrigger = document.querySelector(".link_dev");

        if (productTrigger){
            productTrigger.addEventListener("mouseover",()=>{
                if(this.developHeader.classList.contains("fadeIn")){
                    this.developHeader.classList.remove("fadeIn"); 
                    
                    this.productAnimate.classList.remove("fadeOut");
                }
                this.animationBase.classList.remove("fadeIn");
                this.animationBase.classList.add("fadeOut");
                this.developHeader.classList.add("fadeOut");
                this.productAnimate.classList.add("fadeIn")
            });
            productTrigger.addEventListener("mouseout",()=>{
                if(this.developHeader.classList.contains("fadeOut")){
                    this.developHeader.classList.remove("fadeOut"); 
                    this.animationBase.classList.remove("fadeOut");
                    this.productAnimate.classList.remove("fadeIn");

                }
                
                this.developHeader.classList.add("fadeIn"); 
 
            });
        }
        if (devTrigger){
            devTrigger.addEventListener("mouseover",()=>{
                if(this.productHeader.classList.contains("fadeIn")){
                    this.productHeader.classList.remove("fadeIn");
                    
                    this.devAnimate.classList.remove("fadeOut");
                }
                this.animationBase.classList.remove("fadeIn");
                this.animationBase.classList.add("fadeOut");
                this.productHeader.classList.add("fadeOut"); 
                this.devAnimate.classList.add("fadeIn")
            });
           devTrigger.addEventListener("mouseout",()=>{
                if(this.productHeader.classList.contains("fadeOut")){
                    this.productHeader.classList.remove("fadeOut");
                    this.animationBase.classList.remove("fadeOut");
                    this.devAnimate.classList.remove("fadeIn");
                }
                this.productHeader.classList.add("fadeIn");

            });
        }    
    }
   
   render() {
    
    
       let MainHero;

       if(this.props.main){
        MainHero =   
       
        <HeroBase style={{maxWidth:"1300px"}}>
            <AniLink  className="link_product" color="black" paintDrip to="/product"><h1 ref={h1 => this.productHeader = h1} className="product_header">{this.props.head_1}</h1></AniLink>
            
            <AniLink  className="link_dev" color="black" paintDrip to="/development"><h1 ref={h1 => this.developHeader = h1} className="dev_header">{this.props.head_2}</h1></AniLink>

                <HeroImage/>
                <img ref={img => this.productAnimate =img }className="hero_img1" alt={this.props.alt} src="./static/ProdFull.png"/>
                <img ref={img => this.devAnimate =img }className="hero_img2" alt={this.props.alt} src="./static/DevFull.png"/> 
                <img ref={img => this.animationBase =img }className="hero_base" alt={this.props.alt} src="./static/ProdDevFaded.png"/> 
            
        
       </HeroBase>
       } else {
         MainHero =  
        <HeroBase style={{backgroundColor:this.props.color}}>
           <img  style={{
            marginBottom: 0,
            margin:`auto`,
            marginTop:`0`,
            }}alt={this.props.alt} src={this.props.src}/> 
            <div className="hero_children"style={{position:`absolute`,width:`29%`,left:`10%`}}>
                {this.props.children}  
            </div> 
            
        </HeroBase> 
       }

   return (
    <>
    {MainHero}
    </>
        
   );
  
    
   
  }
}


