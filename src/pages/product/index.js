import React from "react"
import Hero from "../../components/Hero"
import data from "../../data/productHP.json"
import styled from "styled-components"
import About from "../../components/about"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Methods from "../../components/prodMethods"
import Values from "../../components/values";
import RecentWork from "../../components/recentWork";

const PageBase = styled.div`
  a{
    text-decoration:none;
  }
`

const ProductPage = () => (
  <Layout data={data.Product[0].Navigation}>
    <SEO title="Product" />
    <PageBase>
      <Hero color="#4955C4">
        <h1>Product Manager</h1>
        <p><q>Be stubborn on vision but flexible on details.</q><br/>- Jeff Bezos</p>
      </Hero>
      <About data={data.Product[1].About}/>
      <Methods data={data.Product[2].Methods}/>
      <Values data={data.Product[3].Value}/>
      <RecentWork data= {data.Product[4].Projects}/>
    </PageBase>
    
  </Layout>
)
export default ProductPage;