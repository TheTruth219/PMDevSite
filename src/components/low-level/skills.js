
import React from "react"
import styled from "styled-components"



const SkillsBase = styled.div`

padding:30px 0;
@media screen and (max-width:900px){
 
    min-width:50%;
    max-width:50%;
}
@media screen and (max-width:525px){
 
  min-width:100%;
 
}

h3{
    text-align:center;
    margin-bottom:8px;
    margin-top:40px;
}
span{
  display:flex;
  margin-bottom:auto;
}
p{
    max-width:1200px;
    align-self:center;
    text-align:center;
    padding:20px;
}

`
  const Skills = (props) =>  {
    const {header,copy} = props;
   return(
     <SkillsBase className="skills">
            <span>
              {props.children}
            </span>
            <h3>{header}</h3>
            <br/>
            <p>{copy}</p>
    </SkillsBase>
   );
  
}



export default Skills