import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import data from "../../data/casestudies/prnetwork.json"
import styled from "styled-components"
import picture from "../../images/PetSmart.png"
import caseStudy from "../../images/PetSmart-CaseStudy.pdf"


const MainDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 8em;

img {
    width: 16em;
    height: 20em;
    display: flex;
    margin: 1em auto 6em;
    box-shadow: 0px 2px 18px 0px rgba(0,0,0,0.50);
    transition: all .3s;

    &:hover {
        transform: scale(1.1);
    }
}

p {
    max-width:800px;
    padding: 0 20px 0 20px;
    margin:auto;
    margin-top: 3em;
    text-align: center;
}
a {
    margin-top: 3em;
}

`
const CaseStudy1 = ()=> {



        return (
            <Layout data={data.PrNetwork[0].Navigation}  >
                <SEO title="Case Study" />
                <MainDiv style={{display:`flex`,alignItems:`center`,justifyContent:`center`}}>
                    <h1 style={{textAlign:"center"}}> PetSmart - Case Study</h1>
                    <p>This is a discovery case study that takes a holistic look at the business and the most exciting areas for growth. The goal of this exercise was to discover new ways to empower the customer experience to drive revenue. I've created a PDF that samples my approach to new products or features.</p>
                    <a href={caseStudy}>
                        <img alt={"petsmart"} src={picture}/>
                    </a>
                   
                </MainDiv>
               
            </Layout>
            
        );
    
}

export default CaseStudy1