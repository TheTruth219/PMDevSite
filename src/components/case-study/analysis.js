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
    margin:2em auto; 
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
    
}
@media screen and (max-width:480px){
    iframe{
        width:100%
    }
}
`

export default class Analysis extends Component {

    render(){
        return (
            <AnalysisBase direction={this.props.direction}>
                <h2>{this.props.data.Title}</h2>
                <div>
                    {this.props.children}
                    <p dangerouslySetInnerHTML={{ __html: this.props.data.Copy }}/>
                </div>
                        
            </AnalysisBase>
        )
    }
   
}
