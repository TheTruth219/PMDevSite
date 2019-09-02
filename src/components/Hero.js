
import React,{Component} from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import HeroImage from "./low-level/heroImage"
import DevImage from "./low-level/devHero";
import ProdImage from "./low-level/prodHero";
// import TweenLite from "gsap"




const HeroBase = styled.section` 

display:flex;
position: relative;
align-items:center;
margin:auto;
padding-top:50px;
justify-content:center;

.product_link:hover{
    transform:scale(1.1);
    transition: all .3s;
}

.develop_link:hover {
    transform:scale(1.1);
    transition: all .3s;
}
.hero_img1,.hero_img2,.hero_base{
    margin:auto; 
    position:absolute;
    bottom:0;
    } 
.hero_img1 {
    opacity:0;
    z-index:5;
    transition: all .4 s
}
.hero_img2 {
    opacity:0;
    z-index:5;
    transition: all .4 s
}
.hero_base{
    opacity:1;
    z-index:0;
    transition: all .4 s
}
h1{
    color:#FFFFFF;
    transition:all .4s;
    margin-bottom:0;
}
a {
    width: 38.5%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    position:absolute;
    z-index:10;
    align-self: center;
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
                }else{
                    this.animationBase.classList.remove("fadeIn");
                    this.animationBase.classList.add("fadeOut");
                    this.developHeader.classList.add("fadeOut");
                    this.productAnimate.classList.add("fadeIn")
                }
                
            });
            productTrigger.addEventListener("mouseout",()=>{
                if(this.developHeader.classList.contains("fadeOut")){
                    this.developHeader.classList.remove("fadeOut"); 
                    this.animationBase.classList.remove("fadeOut");
                    this.productAnimate.classList.remove("fadeIn");

                }else{
                    this.developHeader.classList.add("fadeIn"); 
                }
                
                
 
            });
        }
        if (devTrigger){
            devTrigger.addEventListener("mouseover",()=>{
                if(this.productHeader.classList.contains("fadeIn")){
                    this.productHeader.classList.remove("fadeIn");                 
                    this.devAnimate.classList.remove("fadeOut");
                }else{
                    this.animationBase.classList.remove("fadeIn");
                    this.animationBase.classList.add("fadeOut");
                    this.productHeader.classList.add("fadeOut"); 
                    this.devAnimate.classList.add("fadeIn")
                }
                
            });
           devTrigger.addEventListener("mouseout",()=>{
                if(this.productHeader.classList.contains("fadeOut")){
                    this.productHeader.classList.remove("fadeOut");
                    this.animationBase.classList.remove("fadeOut");
                    this.devAnimate.classList.remove("fadeIn");
                }else{
                    this.productHeader.classList.add("fadeIn");
                }
                

            });
        }    
    }
   
   render() {
    
    
       let MainHero;

       if(this.props.main){
        MainHero =   
       
        <HeroBase style={{backgroundImage:this.props.grad}}>
            <div style={{maxWidth: `1300px`,display: `flex`,position: `relative`,
    justifyContent: `center`}}>
                <AniLink  className="link_product" color="black" paintDrip to="/product"><h1 className="product_link"  ref={h1 => this.productHeader = h1} >{this.props.head_1}</h1></AniLink>
                
                <AniLink  className="link_dev" color="black" paintDrip to="/development"><h1 className="develop_link" ref={h1 => this.developHeader = h1} >{this.props.head_2}</h1></AniLink>
            
            

                <HeroImage/>
                <img ref={img => this.productAnimate =img }className="hero_img1" alt={this.props.alt} src="./static/Prod_Graphic.png"/>
                <img ref={img => this.devAnimate =img }className="hero_img2" alt={this.props.alt} src="./static/Dev_Graphic.png"/> 
                <img ref={img => this.animationBase =img }className="hero_base" alt={this.props.alt} src="./static/MainGraphic.png"/> 
            
            </div>
       </HeroBase>
       } else {
         MainHero =  
        <HeroBase style={{backgroundColor:this.props.color, backgroundImage:this.props.grad}}>
           {this.props.Dev?<DevImage/>:<ProdImage/>}
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


