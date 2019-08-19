import React from "react"
import Hero from "../components/Hero"
import data from "../data/developmentHP.json"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Product = () => (
  <Layout data={data.Development[0].Navigation}>
    <SEO title="Product" />
    <Hero src="./static/4k-wallpaper-blur-close-up-2763927.jpg">
    </Hero>
  </Layout>
)


export default Product;