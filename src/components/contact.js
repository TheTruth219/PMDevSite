import PropTypes from "prop-types"
import React from "react"
import ReactContactForm from 'react-mail-form';
import styled from "styled-components"


const ContactBase = styled.div`
  background-color:silver;
  display:flex;
  flex-direction:column;

  .contact_fields {
    display:flex;
    flex-direction:column;
    width:40%;
    min-width: 272px;
    align-self: center;
  }
  h1{
    text-align: center;
    margin-top: 20px;
  }
  input, textarea {
    padding: 5px 10px;
    margin: 1em 0;
    border: 1px inset grey;
    border-radius: 5px;
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
    <h1 id="contact">Contact Me</h1>
    <ReactContactForm 
    to="stephen@cloudpoweredtech.com"
    className="contact_fields"
    />
  </ContactBase>
)

};


Contact.propTypes = {
  data: PropTypes.array,
}

