import React from 'react'
import styled from 'styled-components'

const Common = styled.section`
max-width:800px;
display:grid;
margin:auto;
padding:3em 0 3em 0;

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
