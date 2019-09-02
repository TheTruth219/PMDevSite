import React from 'react'
import styled from "styled-components"
import {FaNode,FaReact} from "react-icons/fa"
import { IconContext} from "react-icons";



const CardBase = styled.div`

border:1px solid #d3d3d330;
border-radius: 9px;
background-color: white;
box-shadow:rgb(216, 216, 216) 0px 7px 16px 0px;
padding:35px;
margin:20px;

a{
 text-decoration:none;
 color: black;
 display: flex;
 flex-direction: column;
}

p{
    padding:O 20px 0 20px;
}
h3,h4,p{
    text-align:center;
}


`

const Card = ({data}) => {   
    let stack = data.stack.split(",")
    let finalStack = stack.map((word,index) =>{
      switch(word.trim()){
          /* Take the incoming data and look for instances of "Node" and "React". If found, replace the words with the corresponding icons.*/
          case "Node":
              return <FaNode color="6cc24a" size="2em" key={index}/>
              
          case "React":
              return <FaReact color="00d8ff" size="1.5em"  key={index}/>

          default :
          return index === stack.length - 1?<span key={index}>{word}</span>:<span key={index}>{word},</span>
      }
    })
    return (
        <CardBase >
            
            <IconContext.Provider value={{ style: { verticalAlign: 'middle', margin:'5px'} }}>
                <h3>{data.name}</h3> 
                <a target="blank" href={data.link}>
                <img style={{alignSelf:`center`}}width="288px" height="180px"alt="card" src={data.img}/>
                </a>
                <h4>{data.desc}</h4>
                <p>{finalStack}</p>
            </IconContext.Provider>
            
        </CardBase>
    )
}
export default Card
