import React, { Component } from "react"
import Hero from "../components/Hero"
import data from "../data/landingPage.json"
import About from "../components/about"
import Loader from "../components/loader"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialBanner from "../components/low-level/socialBanner";

const imgURLs = {
  Loader: "https://i.pinimg.com/originals/3e/f0/e6/3ef0e69f3c889c1307330c36a501eb12.gif"
  
}
class IndexPage extends Component{
  constructor(props) {
    super(props)
      this.state = {
        loading:"true"
       
    }
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({loading:"false"})
    },1000)
    
  }

  render(){


    return(
    <Layout data={data.LandingPage[0].Navigation}
  main={true}>
    <SEO title="Home" />
    <Loader loading={this.state.loading} src={imgURLs.Loader}/>
    <Hero main
          grad="linear-gradient(180deg,#3127AD,#28C4F0)" 
          head_1={data.LandingPage[0].Hero[0].title_1} 
          head_2={data.LandingPage[0].Hero[1].title_2} 
          />
    <SocialBanner/>
    <About data={data.LandingPage[0].About}/>
  </Layout>
  
    )
  }
  
}
  
export default IndexPage
