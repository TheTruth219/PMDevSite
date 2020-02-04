import React from "react"
import styled from "styled-components"

const ButtonBase = styled.div`

    background-color: white;
    display: flex;
    border-radius: 20px;
    max-width: 125px;
    max-height: 67px;
    padding-bottom: 0;
    align-self: center;
    background-image: linear-gradient(45deg, #05D3DE, #28C4F0);

a {
    text-decoration: none;
    color: #05D3DE;
    background-color: #13163B;
    text-align: center;
    border-radius: 20px;
    padding: 6px 17px;
    transition: all 0.5s;
    margin:2px;
    &:hover {
      background-color:#05D3DE;
      color:white;
      font-weight:bold;
    }
}

`

export default function Button({copy,link}) {
    return (
        <ButtonBase>
            <a href={link} role="button">{copy}</a>
        </ButtonBase>
    )
}
