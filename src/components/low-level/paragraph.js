import React from "react";
import styled from "styled-components";


const ParagraphBase = styled.p`

align-self:center; 
  
  ${props =>
    typeof(props.p1)? `font-size:20px; line-height:30px; font-family: 'PT Sans', sans-serif;` : `width: auto`}

  ${props =>
    typeof(props.height) === "string" ? `height:${props.height}` : `height: 2px`}  
`;

const Paragraph = props => {
  let { p1, p2 } = props;

  return (
    <ParagraphBase
      p1={p1}
      p2={p2}
     
     />

  );
};

export default Paragraph;