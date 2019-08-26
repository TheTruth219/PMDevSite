import React from "react"
import Hero from "../components/Hero"
import About from "../components/about"
import Methods from "../components/devMethods"
import data from "../data/developmentHP.json"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RecentWork from "../components/recentWork";

const Development = () => (
  <Layout data={data.Development[0].Navigation} >
    <SEO title="Development" />
    <Hero Dev color="#E4E6B2" src="./static/FED2.png">
      <h1 >Front-End Developer</h1>
      <p>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum </p>
    </Hero>
    <About data={data.Development[2].About}/>
    <Methods data={data.Development[3].Methods}/>
    <RecentWork data={data.Development[4].Projects}/>
  </Layout>
)
export default Development;