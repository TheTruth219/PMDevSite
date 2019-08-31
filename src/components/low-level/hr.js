import React from "react";
import styled from "styled-components";


const HrBase = styled.hr`
   align-self:center; 
  
  ${props =>
    typeof(props.width) === "string" ? `width:${props.width}` : `width: 40px`}

  ${props =>
    typeof(props.height) === "string" ? `height:${props.height}` : `height: 2px`}

  ${props =>
    typeof(props.color) === "string" ? `border-color:${props.color}` : `border-color:grey`}

  ${props =>
    typeof(props.border) === "string" ? `border-width:${props.border}` : false}
    ${props =>
      props.grad? `background-image:${props.grad}`:false}
    
`;

const Hr = props => {
  let { height, width, color, border, grad } = props;

  return (
    <HrBase
      height={height}
      width={width}
      color={color}
      border={border}
      grad={grad}
     
     />

  );
};

export default Hr;