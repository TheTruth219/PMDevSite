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
    <Hero Dev grad="linear-gradient(180deg,#07ACDA,#29f4ff)" >
      <h1 >Developer</h1>
      <p><q>Simplicity is the soul of efficiency.</q><br/> – Austin Freeman </p>
    </Hero>
    <About data={data.Development[2].About}/>
    <Methods data={data.Development[3].Methods}/>
    <Values data={data.Development[4].Value}/>
    <RecentWork dev data={data.Development[5].Projects}/>
  </Layout>
)
export default Development;