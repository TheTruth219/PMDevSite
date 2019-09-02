import React from "react"
import styled from "styled-components"

const SocialBase = styled.div`
display:flex;
min-width:100vw;
justify-content:center;
background-color:#000000;
color:white;
p{
    margin:12px;
    a{
        color:white;
        font-weight:bold;
    }
}
`
const SocialBanner = () =>  {

   return(
    <SocialBase>
       <p> Connect with me on <a href="https://www.linkedin.com/in/stephen-powerscpt/" target="blank">LinkedIn</a></p>
    </SocialBase>
  
    
   );
}

export default SocialBanner;

