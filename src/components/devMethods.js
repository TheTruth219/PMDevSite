
import React from "react"
import styled from "styled-components"
import {FaMobileAlt,FaCog,FaBoxes,FaChartBar} from "react-icons/fa";
import { IconContext} from "react-icons";
import Skills from "./low-level/skills"
import Hr from "./low-level/hr"


const MethodsBase = styled.section`

display:flex;
flex-direction:column;
background-color:#13163B;
padding:30px 0;
color:#FFFFFF;
@media screen and (max-width:900px){
 .skills_container{
     flex-wrap:wrap;
    }
}

h1 {
    text-align:center;
}




`
export default function Methods({data}) {
   
    
   return(
    <MethodsBase>
     <IconContext.Provider value={{ style: { verticalAlign: 'middle', margin:'auto',
     color: "#05D3DE"}, size:"4em" }}>
        <h1>Methodology</h1>
        <Hr height="4px"width="40px" grad="linear-gradient(45deg,#05D3DE,#28C4F0)"/>
        <div className="skills_container"style={{display:"flex", flexDirection:"row", maxWidth:"1200px",margin:"auto"}}>
            <Skills header={data[0][0]} copy={data[0][1]}> 
                <FaMobileAlt /> 
            </Skills>

            <Skills header={data[1][0]} copy={data[1][1]}> 
                <FaCog/> 
            </Skills>

            <Skills header={data[2][0]} copy={data[2][1]}> 
                <FaBoxes/> 
            </Skills>

            <Skills header={data[3][0]} copy={data[3][1]}> 
                <FaChartBar/> 
            </Skills>
        </div>
      </IconContext.Provider> 
    </MethodsBase>
  
    
   );
  }



 
