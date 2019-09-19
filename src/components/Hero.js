
import React,{Component} from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import HeroImage from "./low-level/heroImage"
import DevImage from "./low-level/devHero";
import ProdImage from "./low-level/prodHero";
import Product from "../images/Prod_Graphic.png";
import Develop from "../images/Dev_Graphic.png";
import Main from "../images/MainGraphic.png"





const HeroBase = styled.section` 

display:flex;
position: relative;
align-items:center;
margin:auto;
padding-top:50px;
justify-content:center;

.img_container{
    position: relative;
    display: flex;
    flex-direction: column;
    max-width:900px;
    margin:auto;
}

.product_link,.develop_link{
    padding:2em;
}
.product_link:hover,.develop_link:hover{
    transform:scale(1.1);
    transition: all .4s;
}

.hero_img1,.hero_img2,.hero_base{
    margin:auto; 
    position:absolute;
    bottom:0;
    } 
.hero_img1,.hero_img2 {
    opacity:0;
    z-index:3;
    transition: opacity .4s;
}
 
.hero_base{
    opacity:1;
    z-index:0;
    transition: opacity .4s;
}
h1{
    color:#FFFFFF;
    margin-bottom:.3em;
    transition:transform .4s, opacity 1.5s;

}
@media screen and (max-width:700px){
    .product_link,.develop_link{
        font-size: 7vw;
        border: solid 3px white;
        padding: 10px;
        border-radius:9px;

    }
}
a {
    width: 38.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    position:absolute;
    z-index:10;
    align-self: center;
    }


p{
    padding-right: 50px;
    margin-right: 50px;
    color:white;
}

   

.fadeOut{
    opacity:0;
    transition: all 2s
    
}

  .fadeIn{
    opacity:1;
    transition: all 2s
}
.hero_children {
    position: absolute;
    margin-left: 4em;
    align-self: center;
    width: 32%;
    left: -30px;
}


@media screen and (max-width: 700px){
    .hero_children{
        h1{
            font-size:6vw;
        }
       
        q{
            font-size:2.4vw;
        }
    }
}
@media screen and (max-width: 567px){
    .hero_children{
        position: initial; 
        align-self: center;
        width: auto; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 4em;  
        margin: 18% 5% 18% 5%;
        h1{
            font-size:2.25rem;
            text-align: center;
        }
        q{
            font-size:15px;
        }
        p{
            padding:0 0 0 20px;
            margin:0;
            max-width:260px;
        }
    }
    .img_container{
       display:none;
    }
    
}

`


export default class Hero extends Component {
   
    
    prodAnimate = ()=>{
        if(this.developHeader.classList.contains("fadeIn")){
            this.developHeader.classList.remove("fadeIn"); 
            this.productAnimate.classList.remove("fadeOut");
        }else{
            this.animationBase.classList.remove("fadeIn");
            this.animationBase.classList.add("fadeOut");
            this.developHeader.classList.add("fadeOut");
            this.productAnimate.classList.add("fadeIn")
        }
    } 
    prodUnanimate = ()=>{
        if(this.developHeader.classList.contains("fadeOut")){
            this.developHeader.classList.remove("fadeOut"); 
            this.animationBase.classList.remove("fadeOut");
            this.animationBase.classList.add("fadeIn");
            this.productAnimate.classList.remove("fadeIn");
            this.productAnimate.classList.add("fadeOut")
        }else{
            this.developHeader.classList.add("fadeIn"); 
        }
           
    }
    developAnimate = () => {
        if(this.productHeader.classList.contains("fadeIn")){
            this.productHeader.classList.remove("fadeIn");                 
            this.devAnimate.classList.remove("fadeOut");
        }else{
            this.animationBase.classList.remove("fadeIn");
            this.animationBase.classList.add("fadeOut");
            this.productHeader.classList.add("fadeOut"); 
            this.devAnimate.classList.add("fadeIn")
        }
    }
    devUnanimate = () => {
        if(this.productHeader.classList.contains("fadeOut")){
            this.productHeader.classList.remove("fadeOut");
            this.animationBase.classList.remove("fadeOut");
            this.animationBase.classList.add("fadeIn");
            this.devAnimate.classList.remove("fadeIn");
            this.devAnimate.classList.add("fadeOut")

        }else{
            this.productHeader.classList.add("fadeIn");
        }
        

    }
    
    componentDidMount(){
      

        if (this.productHeader){  
            this.productHeader.addEventListener("mouseover",this.prodAnimate);
            this.productHeader.addEventListener("mouseout",this.prodUnanimate);          
        }
        if (this.developHeader){        
            this.developHeader.addEventListener("mouseover",this.developAnimate);
            this.developHeader.addEventListener("mouseout",this.devUnanimate);      
        }    
    }
   componentWillUnmount(){
    if (this.productHeader){
        this.productHeader.removeEventListener("mouseover",this.prodAnimate);
        this.productHeader.removeEventListener("mouseout",this.prodUnanimate);
    }
    if (this.developHeader){
        this.developHeader.removeEventListener("mouseover",this.developAnimate);
        this.developHeader.removeEventListener("mouseout",this.devUnanimate);    
    }
     
   }
   render() {
    
    
       let MainHero;

       if(this.props.main){
        MainHero =   
       
        <HeroBase style={{backgroundImage:this.props.grad}}>
            <div style={{maxWidth: `1300px`,display: `flex`,flexDirection:`column`,position: `relative`,
    justifyContent: `center`}}>
                <AniLink  style={{left:0}} fade to="/product"><h1 className="product_link"  ref={h1 => this.productHeader = h1} >{this.props.head_1}</h1></AniLink>
                
                <AniLink  style={{right:0}} fade to="/development"><h1 className="develop_link" ref={h1 => this.developHeader = h1} >{this.props.head_2}</h1></AniLink>
            
            
               
                <HeroImage/>
              
                
                <img ref={img => this.productAnimate =img }className="hero_img1" alt={this.props.alt} src={Product}/>
                <img ref={img => this.devAnimate =img }className="hero_img2" alt={this.props.alt} src={Develop}/> 
                <img ref={img => this.animationBase =img }className="hero_base" alt={this.props.alt} src={Main}/> 
            
            </div>
       </HeroBase>
       } else {
         MainHero =  
        <HeroBase style={{backgroundColor:this.props.color, backgroundImage:this.props.grad}}>
            <div style={{position:`relative`,display:`flex`,flexDirection:`column`,width:`1200px`,justifyContent: `center`}}>
             <div className="img_container">{this.props.Dev?< DevImage />:<ProdImage />}</div>
             <div className="hero_children">
              {this.props.children} 
             </div> 
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


