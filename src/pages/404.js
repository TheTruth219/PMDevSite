import React from "react"
import data from "../data/landingPage.json"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout data={data.LandingPage[0].Navigation}>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>This page doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
