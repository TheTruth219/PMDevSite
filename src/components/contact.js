import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Button from "./low-level/button"
import {FaGithubAlt,FaLinkedinIn} from "react-icons/fa"
import { IconContext} from "react-icons"


const ContactBase = styled.div`
  background-color:#13163B;
  display:flex;
  flex-direction:column;
  padding:40px;

  h2 {
    text-align: center;
    padding:0 20px;
    margin-top: 20px;
    color:white;
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
    <Button 
      link="mailto:stephen@cloudpoweredtech.com?subject=We%20Should%20Talk%20Soon"
      copy="Contact me"
      />
    <IconContext.Provider value={{ style: { verticalAlign: 'middle', margin:'20px' }, color: "white", size:"2em" }}>
      <div>
        <span>
          <a href="https://github.com/TheTruth219?tab=repositories" target="blank">
            <FaGithubAlt/>
          </a>
          <a href="https://www.linkedin.com/in/stephen-powerscpt/" target="blank">
            <FaLinkedinIn/>
          </a>
        </span>
      </div>
    </IconContext.Provider>
    
  </ContactBase>
)

};


Contact.propTypes = {
  data: PropTypes.array,
}

