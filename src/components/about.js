
import React from "react"
import styled from "styled-components"
import Hr from "./low-level/hr"



const AboutBase = styled.section`
display:flex;
flex-direction:column;
background-color:#F8F8F8;
padding:70px 0 56px 0;

h1{
    text-align:center;
    margin-bottom:8px;
}
p{
    max-width:1200px;
    align-self:center;
    text-align:center;
    padding:20px;
    font-family:'PT Sans', sans-serif;
}

`
const About=({data})=>  {

    
   return(
    <AboutBase id="about">
       <h1 >About</h1>
       <Hr height="4px"width="40px" grad="linear-gradient(45deg,#05D3DE,#28C4F0)"/>
       <p dangerouslySetInnerHTML={{ __html: data }}></p>
    </AboutBase>
  
    
   );
}

export default About

