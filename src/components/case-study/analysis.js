import React, { Component } from 'react'
import styled from "styled-components"

const AnalysisBase = styled.section`
display:flex;
max-width:800px;
margin:auto;
flex-direction:column;

h2{
    margin-left: 52.4%;
}
div{
    display:flex;
    flex-direction:row;
    margin:auto;  
}
iframe{
    min-width:48%;
    align-self:center;
    margin:2em auto;
}
p{
    padding-left:2em;
}
@media screen and (max-width:880px){
    padding:auto 2em;
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
            <AnalysisBase>
                <h2>{this.props.data.Title}</h2>
                <div>
                    {this.props.children}
                    <p dangerouslySetInnerHTML={{ __html: this.props.data.Copy }}/>
                </div>
                        
            </AnalysisBase>
        )
    }
   
}
