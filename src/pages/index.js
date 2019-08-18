import React from "react"
import Hero from "../components/Hero"
import data from "../data/landingPage.json"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout data={data.LandingPage[0].Navigation}
          main={true}  >
    <SEO title="Home" />
    <Hero main={true} 
          head_1={data.LandingPage[1].Hero[0].title_1} 
          head_2={data.LandingPage[1].Hero[1].title_2} 
          src="https://lh3.googleusercontent.com/-ylW5nhIXv5E/XVWqcLdBlFI/AAAAAAAABgE/xQ_1gd09aWU7mquGQKjdhXIrr-xeLc1vgCK8BGAs/s0/2019-08-15.png"
          />

  </Layout>
)

export default IndexPage
