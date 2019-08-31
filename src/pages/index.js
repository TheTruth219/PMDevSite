import React from "react"
import Hero from "../components/Hero"
import data from "../data/landingPage.json"
import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialBanner from "../components/low-level/socialBanner";

const IndexPage = () => (
  <Layout data={data.LandingPage[0].Navigation}
  main={true}>
    <SEO title="Home" />
    <Hero main={true}
          grad="linear-gradient(180deg,#3127AD,#28C4F0)" 
          head_1={data.LandingPage[0].Hero[0].title_1} 
          head_2={data.LandingPage[0].Hero[1].title_2} 
          />
    <SocialBanner/>
    <About data={data.LandingPage[0].About}/>
  </Layout>
)
  
export default IndexPage
