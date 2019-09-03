import React from 'react'
import styled from "styled-components"
import Card from "./low-level/cards"
import Slider from "react-slick"
import Hr from "./low-level/hr"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WorkBase = styled.section`
display:flex;   
flex-direction: column;
padding:60px 0 30px 0;
background-color:#F8F8F8;

h1{
    text-align:center;
}
`

const RecentWork = ({data}) => {
    let cards = data.map((card,index) => (
        <Card data={card} key={index}/>  
    ));
    var settings = {
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
    return (
        <WorkBase id="projects">
            <h1>Recent Work</h1>
            <Hr height="4px"width="40px" grad="linear-gradient(45deg,#05D3DE,#28C4F0)"/>
            <div >
                <Slider {...settings}>
                    {cards}
                </Slider>   
            </div>
            
        </WorkBase>
    )
}

export default RecentWork
