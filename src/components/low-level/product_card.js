import React from 'react'
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"



const CardBase = styled.div`

width:25%;
border-radius: 6px;
transition:transform 0.3s;

a {
    position:relative;
}
 &:hover {
     transform:scale(1.05);
     z-index:10;
 }
@media screen and (max-width:800px){
    width:50%;
}
@media screen and (max-width:400px){
    width:100%;
}
img {
    width:100%;
    height:100%;
    border-radius: 5px;
}
span {
    padding-top: 3px;

}
.caseStudy {
    position: absolute;
    color: black;
    font-weight: 600;
    display: flex;
    left: -43px;
    margin-top: 35px;
    border-bottom: 31px solid #fff;
    border-left: 41px solid transparent;
    border-right: 24px solid transparent;
    width: 152px;
    transform: rotate(-53deg);
    height: 0;
    mix-blend-mode:lighten;
}


`

const ProductCard = ({data}) => {   

    return (
        <CardBase >

                <AniLink fade to={data.link}>
                 {data.caseStudy?<div className="caseStudy"><span>Case Study</span></div>:false }   
                <img style={{alignSelf:`center`}} alt="card" src={data.img}/>
                </AniLink>
    
        </CardBase>
    )
}
export default ProductCard
