import React from 'react'
import styled from "styled-components"


const CardBase = styled.div`

border:1px solid #d3d3d330;
border-radius: 9px;
background-color: white;
box-shadow:rgb(216, 216, 216) 0px 7px 16px 0px;
padding:35px;
margin:20px;
display:flex;
flex-direction:column;
justify-content:center;


p{
    text-align:center;
    padding:O 20px 0 20px;
}
h3{
    text-align:center;
}

`

const Card = ({data}) => {   
    return (
        <CardBase >
            <h3>{data.name}</h3> 
            <img style={{alignSelf:`center`}}width="288px" height="180px"alt="card" src={data.img}/>
            <p>{data.copy}</p>
        </CardBase>
    )
}
export default Card
