import React from "react"
import Layout from "../components/layout"
import MainNav from "../components/mainNav"
import SEO from "../components/seo"
import data from "../data/blogMain.json"


const BlogIndex = ()=> {



        return (
            <Layout  blog= {true} >
                <SEO title="Blog" />
                <MainNav data={data.Blog[0].Navigation}/>
                <div style={{height:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:`linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`}}>
                    <h1 style={{textAlign:"center"}}> Coming Soon</h1>
                </div>
               
            </Layout>
            
        );
    
}

export default BlogIndex