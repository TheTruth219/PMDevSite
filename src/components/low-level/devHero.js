import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"



/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Hero = styled(Img)`
div{
  position:absolute;
}
picture{
  display:flex;
}
picture > img{
  margin-bottom: 0;  
  position:inherit !important;
  }
`
const DevImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "FED2.png" }) {
        childImageSharp {
          fluid(maxWidth:900,maxHeight:640 quality:80) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  return(
    <Hero width="900px" height="640px" style={{zIndex:`1`}} fluid={data.file.childImageSharp.fluid} />
  ) 
}

export default DevImage
