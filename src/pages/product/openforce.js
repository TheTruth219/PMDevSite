import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import data from "../../data/casestudies/prnetwork.json"


const CaseStudy1 = ()=> {



        return (
            <Layout data={data.PrNetwork[0].Navigation}  >
                <SEO title="Case Study" />
                <div style={{height:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundImage:`linear-gradient(45deg, #07ACDA 0%, #4955C4 100%)`}}>
                    <h1 style={{textAlign:"center",color:`white`}}> Coming Soon</h1>
                </div>
               
            </Layout>
            
        );
    
}

export default CaseStudy1