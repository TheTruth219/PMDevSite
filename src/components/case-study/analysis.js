import React, { Component } from 'react'
import styled from "styled-components"

const AnalysisBase = styled.section`
display:flex;
max-width:800px;
margin:auto;
flex-direction:column;

h2{
    ${props =>
    props.direction? `margin-left:0`:`margin-left: 52.4%`}   
}
div{
    display:flex;
    ${props =>
    props.direction? `flex-direction:row-reverse`:`flex-direction:row`}
    
    margin:auto;  
}
iframe{
    min-width:48%;
    align-self:center;
    margin:2em auto;
}
p{
    ${props =>
    props.direction? `padding-left:0; padding-right:2em`:`padding-left:2em`}
}

img {
    align-self:center;
  
}
ul{
    margin-bottom:1em !important;
}
li{
    margin-bottom:0;
}
@media screen and (max-width:880px){
    padding:auto 2em;
    img{
        margin:auto;
        margin-bottom:15px;
    }
    div{
        flex-wrap:wrap;
    }
    h2{
       margin-left:0;
       text-align:center;
    }
    p{
        text-align:center;
        padding:0 2em;
    }
    li {
        list-style-type:none;
        font-weight:bold;
    }
    
}
@media screen and (max-width:480px){
    iframe{
        width:100%
    }
}
`

export default class Analysis extends Component {

    render(){
        const {data,direction,children} = this.props;
        return (
            <AnalysisBase direction={direction}>
                <h2>{data.Title}</h2>
                <div>
                    {children}
                    <p dangerouslySetInnerHTML={{ __html: data.Copy }}/>
                </div>
                        
            </AnalysisBase>
        )
    }
   
}
