import React from "react"
import Hero from "../../components/Hero"
import data from "../../data/productHP.json"
import styled from "styled-components"
import About from "../../components/about"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Methods from "../../components/prodMethods"

const PageBase = styled.div`
  a{
    text-decoration:none;
  }
`

const ProductPage = () => (
  <Layout data={data.Product[0].Navigation}>
    <SEO title="Product" />
    <PageBase>
      <Hero color="#D7973A"src={"./static/ProdHero2.png"}>
        <h1>Product Manager</h1>
        <p>lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum lorum ipsum </p>
      </Hero>
      <About data={data.Product[1].About}/>
      <Methods data={data.Product[2].Methods}/>
    </PageBase>
    
  </Layout>
)
export default ProductPage;