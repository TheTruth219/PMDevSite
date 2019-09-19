import React from 'react'
import styled from 'styled-components'

const Common = styled.section`
max-width:800px;
display:grid;
margin:auto;
padding:2em 0 2em 0;
a{
    color:black;
    font-weight:bold;
    transition: all .2s
}
a:hover{
    ${Math.random() > .5? `color:#05D3DE`:`color:#28C4F0`}
}
${props =>
props.color? `background-color:${props.color}`: false}

@media screen and (max-width:880px){
    h2,p {
        text-align:center;
    }
    p {
        padding:3em 2em 3em 2em;
    }
}
`
export default function CommonSection({data}) {
    return (
        <Common>
            <h2>{data.Title}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.Copy }}/>
        </Common>
    )
}
