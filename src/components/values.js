import React,{Component} from 'react'
import styled from "styled-components"
import loadable from "@loadable/component"
import Hr from "./low-level/hr"

const DependencyWheel = loadable(()=> import('./low-level/dependencyWheel'));




const ValueBase = styled.section`
display:flex;   
flex-direction: column;
padding:60px 0 30px 0;
max-width:1200px;
margin:auto;

@media screen and (min-width:945px){
  .skillset_copy{
    width:45%
  }
}
.skillsetContainer{
  display:flex;
  padding:2em 3em;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
    border:1px solid #d3d3d330;
    border-radius: 9px;
    box-shadow:rgb(216, 216, 216) 0px 7px 16px 0px;
    padding:25px;
    margin: 20px;
    display:flex;
    flex-direction:column;
    justify-content:center;
}
p{
    text-align:center;
}
h2{
    text-align:center;
}
h1{
    text-align:center;
}


`





  class Values extends Component  {
    constructor(props){
      super(props);
      this.Graph = "Loading"
    }
    componentDidMount(){

      this.Graph = 
        <div>
         <DependencyWheel colors={this.props.data[4].chartColors} data={this.props.data[3].chartData}/>
        </div>
    }
       
      render(){
    return (
        <ValueBase id="tools">
            <h1>{this.props.data[0].title}</h1>
            <Hr height="4px"width="40px" grad="linear-gradient(45deg,#05D3DE,#28C4F0)"/>
            <div className="skillsetContainer">
              <div className="skillset_copy" style={{alignSelf:`center`}}>
                <h2>{this.props.data[1].subtitle}</h2>
                <p>{this.props.data[2].copy}</p>
              </div>             
              {this.Graph}
            </div>
            
            
        </ValueBase>
    );
  }
}
  export default Values;