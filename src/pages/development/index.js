import React from "react"
import Hero from "../../components/Hero"
import About from "../../components/about"
import Methods from "../../components/devMethods"
import data from "../../data/developmentHP.json"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import RecentWork from "../../components/recentWork";
import Values from "../../components/values";

const Development = () => (
  <Layout data={data.Development[0].Navigation} >
    <SEO title="Development" />
    <Hero Dev color="#07ACDA" src="./static/FED2.png">
      <h1 >Front-End Developer</h1>
      <p>Cool dev quote goes here. </p>
    </Hero>
    <About data={data.Development[2].About}/>
    <Methods data={data.Development[3].Methods}/>
    <Values data={data.Development[4].Value}/>
    <RecentWork data={data.Development[5].Projects}/>
  </Layout>
)
export default Development;