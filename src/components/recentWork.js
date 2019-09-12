import React, { Component } from 'react'
import styled from "styled-components"
import Card from "./low-level/cards"
import ProductCard from "./low-level/product_card"
import Slider from "react-slick"
import Hr from "./low-level/hr"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const WorkBase = styled.section`
display:flex;   
flex-direction: column;
padding:60px 0 30px 0;
background-color:#F8F8F8;

    h1{
        text-align:center;
    }
`

export default class RecentWork extends Component {
       
 
render(){
    if(this.props.dev){
            this.DevCards = this.props.data.map((card,index) => (
           <Card 
            data={card} 
            key={index}/>  
               
        ));  
    }else{
            this.ProductCards = this.props.data.map((card,index)=>
            <ProductCard data={card} key={index}/>
        );
    }
    
    
    let settings = {
        dots: true,
        arrows:true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        lazyLoad: 'progressive',
        responsive:[
            {
                breakpoint: 1495,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
            },
            {
            breakpoint: 1064,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 709,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }

        }]
       
    };

    let Development = <div>
                        <Slider {...settings}>
                            {this.DevCards}
                        </Slider>
                      </div> ;
    let Product = <div style={{maxWidth:`1200px`,display:`flex`,flexDirection:`row`,margin:`auto`,flexWrap:`wrap`}}>{this.ProductCards}</div>;

    
    
    return (
        <WorkBase id="projects">
            <h1>Projects</h1>
            <Hr height="4px"width="40px" grad="linear-gradient(45deg,#05D3DE,#28C4F0)"/>
            
               {this.props.dev?Development:Product}      
            
            
        </WorkBase>
        )
    }
}

