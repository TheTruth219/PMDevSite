import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import {FaGithubAlt,FaLinkedinIn} from "react-icons/fa"
import { IconContext} from "react-icons"


const ContactBase = styled.div`
  background-color:#13163B;
  display:flex;
  flex-direction:column;
  padding:40px;

.wrapper{
  background-color: white;
    display: flex;
    border-radius: 20px;
    max-width: 125px;
    max-height: 67px;
    padding-bottom: 0;
    align-self: center;
    background-image: linear-gradient(45deg, #05D3DE, #28C4F0);
}
  h2{
    text-align: center;
    padding:0 20px;
    margin-top: 20px;
    color:white;
  }
  .contact_button{
    text-decoration: none;
    color: #05D3DE;
    background-color: #13163B;
    text-align: center;
    border-radius: 20px;
    padding: 6px 17px;
    transition: all 0.5s;
    margin:2px;
    &:hover{
      background-color:#05D3DE;
      color:white;
      font-weight:bold;
    }
  }
  div{
    display:flex;
    justify-content:center;
  }

`

export default function Contact () {
  
  

return (
  <ContactBase id="contact">
    <h2 id="contact">Let's Connect!</h2>
    <div className="wrapper">
      <a className="contact_button"href="mailto:stephen@cloudpoweredtech.com?subject=We%20Should%20Talk%20Soon" role="button">Contact me</a>
    </div>
    
    <IconContext.Provider value={{ style: { verticalAlign: 'middle', margin:'20px' }, color: "white", size:"2em" }}>
      <div>
        <span><a href="https://github.com/TheTruth219?tab=repositories" target="blank"><FaGithubAlt/></a><a href="https://www.linkedin.com/in/stephen-powerscpt/" target="blank"><FaLinkedinIn/></a></span>
      </div>
    </IconContext.Provider>
    
  </ContactBase>
)

};


Contact.propTypes = {
  data: PropTypes.array,
}

