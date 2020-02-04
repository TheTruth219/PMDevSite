import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
position: absolute;
background:black;
${props =>
  props.loading==="true"?`opacity:1;`:`opacity:0;`}
${props =>
  props.loading==="true"?`z-index:25;`:`z-index: -5;`}
height: 100vh;
width: 100vw;
display: flex;
transition: all .5s;
img{
    margin:auto;
}
`

export default function Loader({loading,src}) {
    return (
        <Container class="loader__div" loading={loading}>
            <img height="100px" width="100px" alt="loading" src={src}/>
        </Container>
    )
}
