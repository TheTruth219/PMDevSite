import React from "react"
import Hero from "../components/Hero"
import About from "../components/about"
import Methods from "../components/devMethods"
import data from "../data/developmentHP.json"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Development = () => (
  <Layout data={data.Development[0].Navigation}>
    <SEO title="Development" />
    <Hero src="./static/4k-wallpaper-blur-close-up-2763927.jpg">
    </Hero>
    <About data={data.Development[2].About}/>
    <Methods data={data.Development[3].Methods}/>
  </Layout>
)
export default Development;