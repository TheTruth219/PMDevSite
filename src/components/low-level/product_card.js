import React from 'react'
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"



const CardBase = styled.div`

width:25%;
border-radius: 6px;
transition:transform 0.3s;


 &:hover{
     transform:scale(1.05);
 }
@media screen and (max-width:800px){
    width:50%;
}
@media screen and (max-width:400px){
    width:100%;
}
img{
    width:100%;
    height:100%;
    border-radius: 5px;
}


`

const ProductCard = ({data}) => {   

    return (
        <CardBase >

                <AniLink fade to={data.link}>
                <img style={{alignSelf:`center`}} alt="card" src={data.img}/>
                </AniLink>
    
        </CardBase>
    )
}
export default ProductCard
