import React from 'react'
import styled from "styled-components"

const WorkBase = styled.section`
display:flex;   
flex-direction: column;
padding:60px 0 30px 0;
.card {
    border:1px solid #d3d3d330;
    border-radius: 9px;
    box-shadow:rgb(216, 216, 216) 0px 7px 16px 0px;
    padding:25px;
    margin: 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
p{
    text-align:center;
}
h3{
    text-align:center;
}
h1{
    text-align:center;
}


`

const RecentWork = ({data}) => {
    let cards = data.map((card,index) => (
        
    <div className="card" key={index}>
        <h3>{card.name}</h3> 
        <img style={{alignSelf:`center`}}width="288px" height="180px"alt="card" src={card.img}/>
        <p>{card.copy}</p>
    </div>
     
    ));
    return (
        <WorkBase id="projects">
            <h1>Recent Work</h1>
            <div style={{display:`flex`}}>
                {cards}
            </div>
            
        </WorkBase>
    )
}

export default RecentWork
