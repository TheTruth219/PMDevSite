import React from 'react'
import styled from "styled-components"

const WorkBase = styled.section`
display:flex;   
flex-direction: column;
h1{
    text-align:center;
}


`

const RecentWork = ({data}) => {
    let cards = data.map((card,index) => (
        
    <div className="card" key={index}>
        <h3>{card.name}</h3> 
        <img width="288px" height="180px"alt="card" src={card.img}/>
        <p>{card.copy}</p>
    </div>
     
    ));
    return (
        <WorkBase>
            <h1>Recent Work</h1>
            <div style={{display:`flex`}}>
                {cards}
            </div>
            
        </WorkBase>
    )
}

export default RecentWork
