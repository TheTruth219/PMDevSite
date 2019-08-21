import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const ContactBase = styled.div`
  background-color:silver;
  display:flex;
  flex-direction:column;


  h2{
    text-align: center;
    padding:0 20px;
    margin-top: 20px;
  }
  a{
    text-decoration: none;
    color: white;
    background-color: #bffcc6;
    text-align: center;
    border-radius: 5px;
    margin: 5px auto 25px auto;
    padding: 6px 17px;
  }

`
export default function Contact () {
  
  

return (
  <ContactBase>
    <h2 id="contact">Interested in working together or just grabbing a cup of coffee?</h2>
    <a href="mailto:stephen@cloudpoweredtech.com?subject=We%20Should%20Talk%20Soon" role="button">Contact me</a>
  </ContactBase>
)

};


Contact.propTypes = {
  data: PropTypes.array,
}

