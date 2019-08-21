import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import data from "../data/blogMain.json"


const BlogIndex = ()=> {



        return (
            <Layout data={data.Blog[0].Navigation} blog= {true} >
                <SEO title="Blog" />
                <h1 style={{textAlign:"center"}}> Coming Soon</h1>
            </Layout>
            
        );
    
}

export default BlogIndex