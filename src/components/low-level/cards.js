import React from 'react'
import styled from "styled-components"
import {FaNode,FaReact,FaSass,FaSalesforce,FaGrunt} from "react-icons/fa"
import { IconContext} from "react-icons";
import { OutboundLink } from 'gatsby-plugin-google-analytics'



const CardBase = styled.div`

border:1px solid #d3d3d330;
border-radius: 6px;
background-color: white;
box-shadow:rgb(216, 216, 216) 0px 7px 16px 0px;
padding:35px;
margin:20px;
min-height:448px;
transition:transform 0.3s;

 &:hover{
     transform:scale(1.05);
 }

img{
    border: solid #8080803b 1px;
    border-radius: 5px;
}
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
              return <FaNode color="#6cc24a" size="2em" key={index}/>
              
          case "React":
              return <FaReact color="#00d8ff" size="1.5em"  key={index}/>
              
          case "Sass":
              return <FaSass color="#bf4080" size="1.5em"  key={index}/>

          case "Salesforce":
              return <FaSalesforce color="#1798c1" size="1.5em"  key={index}/>

          case "Grunt":
              return <FaGrunt color="#fba919" size="1.5em"  key={index}/>

          default :
          return index === stack.length - 1?<span key={index}>{word}</span>:<span key={index}>{word},</span>
      }
    })
    return (
        <CardBase >
            <OutboundLink target="blank" href={data.link}>
                <IconContext.Provider value={{ style: { verticalAlign: 'middle', margin:'5px'} }}>
                    <h3>{data.name}</h3> 
                    
                    <img style={{alignSelf:`center`}}width="288px" height="180px"alt="card" src={data.img}/>
                    
                    <h4>{data.desc}</h4>
                    <p>{finalStack}</p>
                </IconContext.Provider>
            </OutboundLink>
        </CardBase>
    )
}
export default Card
