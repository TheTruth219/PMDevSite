import React from "react"
import Hero from "../components/Hero"
import data from "../data/productHP.json"
import styled from "styled-components"
import About from "../components/about"
import Layout from "../components/layout"
import SEO from "../components/seo"


const PageBase = styled.div`
  a{
    text-decoration:none;
  }
`

const ProductPage = () => (
  <Layout data={data.Product[0].Navigation}>
    <SEO title="Product" />
    <PageBase>
      <Hero src={"./static/aerial-aerial-shot-background-1644794.jpg"||"https://via.placeholder.com/1200x360"}/>
      <About data={data.Product[1].About}/>
    </PageBase>
    
  </Layout>
)
export default ProductPage;