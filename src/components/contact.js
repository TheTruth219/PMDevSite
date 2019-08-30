import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const ContactBase = styled.div`
  background-color:#17242E;
  display:flex;
  flex-direction:column;
  padding:40px;


  h2{
    text-align: center;
    padding:0 20px;
    margin-top: 20px;
    color:white;
  }
  a{
    text-decoration: none;
    color: #B9BF3C;
    background-color: transparent;
    text-align: center;
    border: 2px solid #B9BF3C;
    border-radius: 5px;
    margin: 5px auto 25px auto;
    padding: 6px 17px;
    transition: all 0.5s;
    &:hover{
      background-color:#B9BF3C;
      color:white;
      font-weight:bold;
    }
  }

`
export default function Contact () {
  
  

return (
  <ContactBase id="contact">
    <h2 id="contact">Interested in working together or just grabbing a cup of coffee?</h2>
    <a href="mailto:stephen@cloudpoweredtech.com?subject=We%20Should%20Talk%20Soon" role="button">Contact me</a>
  </ContactBase>
)

};


Contact.propTypes = {
  data: PropTypes.array,
}

