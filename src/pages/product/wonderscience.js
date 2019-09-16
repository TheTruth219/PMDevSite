import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import data from "../../data/casestudies/wonderscience.json"
import Analysis from "../../components/case-study/analysis"
import CSHero from "../../components/case-study/cs_hero"
import CommonSection from "../../components/case-study/common"


const CaseStudy2 = ()=> {


        return (
            <Layout data={data.WonderScience[0].Navigation}  >
                <SEO title="Case Study" />
                <CSHero data={data.WonderScience[1].Hero}/>             
                <CommonSection data={data.WonderScience[2].Role}/>
                <Analysis  data ={data.WonderScience[3].Product_Analysis}>
                    <iframe title="wonderscience"width="480" height="216" src="https://www.youtube.com/embed/J32ppt18nHY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Analysis> 
                <CommonSection data={data.WonderScience[4].Product_Evolution}/> 
                <Analysis direction="true" data={data.WonderScience[5].Metrics}>
                    <img width="288px" height="288px" alt="logo" src="https://yt3.ggpht.com/a/AGF-l7_AD9KCNE0OzLLANSbmFnZ7QmjubZf685zqew=s288-c-k-c0xffffffff-no-rj-mo"/>
                </Analysis>
                <CommonSection data={data.WonderScience[6].Takeaways}/>
            </Layout>
        );
    
}

export default CaseStudy2