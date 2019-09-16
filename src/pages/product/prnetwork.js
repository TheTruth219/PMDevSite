import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import data from "../../data/casestudies/prnetwork.json"
import Analysis from "../../components/case-study/analysis"
import CSHero from "../../components/case-study/cs_hero"
import CommonSection from "../../components/case-study/common"


const CaseStudy1 = ()=> {


        return (
            <Layout data={data.PrNetwork[0].Navigation}  >
                <SEO title="Case Study" />
                <CSHero data={data.PrNetwork[1].Hero}/>             
                <CommonSection data={data.PrNetwork[2].Role}/>
                <Analysis  data ={data.PrNetwork[3].Product_Analysis}>
                 <iframe title="PrNetwork Video"width="480px" height="216px" src="https://www.youtube.com/embed/eCMPpufFHaA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Analysis> 
                <CommonSection data={data.PrNetwork[4].Product_Evolution}/> 
                <Analysis direction={true} data={data.PrNetwork[5].Metrics}>
                    <img width="382px" alt="pr cards" src="https://web.archive.org/web/20180412204603im_/https://pr.network/bundles/prlanding/img/mobile-cards.png"/>
                </Analysis>
                <CommonSection data={data.PrNetwork[6].Takeaways}/>
            </Layout>
        );
    
}

export default CaseStudy1