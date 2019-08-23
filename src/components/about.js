
import React from "react"
import styled from "styled-components"
import Hr from "./low-level/hr"



const AboutBase = styled.section`
display:flex;
flex-direction:column;
background-color:dimgrey;
padding:30px 0;

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
    <AboutBase>
       <h1>About</h1>
       <Hr width="40px" color="grey"/>
       <p dangerouslySetInnerHTML={{ __html: data }}></p>
    </AboutBase>
  
    
   );
}

export default About

