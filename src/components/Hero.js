
import React,{Component} from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import HeroImage from "./heroImage"




const HeroBase = styled.div`

display:flex;
position: relative;
align-items:center;
margin:auto;
margin-top:60px;
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
    margin-right:auto; 
   
}
.link_dev {
    right: 0; 
   
}
.fadeOut{
    animation-name: fadeOut;
    animation-duration: 1500ms;
    animation-fill-mode: forwards;
    animation-delay: .3s;
    
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

`


export default class Hero extends Component {

    constructor(props){
        super(props);
        this.developHeader = null;
        this.productHeader = null;
    }
    
    componentDidMount(){
      
        let productTrigger = document.querySelector(".link_product");
        let devTrigger = document.querySelector(".link_dev");

        if (productTrigger){
            productTrigger.addEventListener("mouseover",()=>{
                if(this.developHeader.classList.contains("fadeIn")){
                    this.developHeader.classList.remove("fadeIn")
                }
                this.developHeader.classList.add("fadeOut"); 
            });
            productTrigger.addEventListener("mouseout",()=>{
                if(this.developHeader.classList.contains("fadeOut")){
                    this.developHeader.classList.remove("fadeOut");
                }
                this.developHeader.classList.add("fadeIn"); 
            });
        }
        if (devTrigger){
            devTrigger.addEventListener("mouseover",()=>{
                if(this.productHeader.classList.contains("fadeIn")){
                    this.productHeader.classList.remove("fadeIn")
                }
                this.productHeader.classList.add("fadeOut"); 
            });
           devTrigger.addEventListener("mouseout",()=>{
                if(this.productHeader.classList.contains("fadeOut")){
                    this.productHeader.classList.remove("fadeOut");
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
            
           
            {/* <img className="hero_img1" style={{
                marginBottom: 0,
                margin:`auto`,
                marginTop:`0`,
                minWidth:`100vw`,
                zIndex:-1
                }}alt={this.props.alt} src={this.props.src} */}
                <HeroImage/>
            
        
       </HeroBase>
       } else {
         MainHero =  
        <HeroBase>
           <img className="hero_img1" style={{
            marginBottom: 0,
            margin:`auto`,
            marginTop:`0`,
            minWidth:`100vw`,
            zIndex:-1
            }}alt={this.props.alt} src={this.props.src}/>  
        </HeroBase> 
       }

   return (
    <>
    {MainHero}
    </>
        
   );
  
    
   
  }
}


