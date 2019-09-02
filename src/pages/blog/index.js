import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import data from "../../data/blogMain.json"
import Contact from "../../components/contact";


const BlogIndex = ()=> {



        return (
            <Layout data={data.Blog[0].Navigation} blog= {true} >
                <SEO title="Blog" />
                <div style={{height:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundImage:`linear-gradient(45deg, #07ACDA 0%, #4955C4 100%)`}}>
                    <h1 style={{textAlign:"center",color:`white`}}> Coming Soon</h1>
                </div>
                <Contact/>
            </Layout>
            
        );
    
}

export default BlogIndex