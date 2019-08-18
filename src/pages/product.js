import React from "react"
import Hero from "../components/Hero"
import {Link} from "gatsby"
import data from "../data/productHP.json"


import Layout from "../components/layout"
import SEO from "../components/seo"

const Product = () => (
  <Layout data={data.Navigation}>
    <SEO title="Product" />
    <Hero src="https://via.placeholder.com/1200x360">
    </Hero>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default Product;