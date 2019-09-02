import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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

const ImageBase = styled.img`

    -webkit-user-drag: none;
    margin:auto;
    margin-bottom:0;
    margin-top:0;
  
    z-index:0;
` 
const DevImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "images/FED2.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return(
    <ImageBase oncopy={false} oncut= {false} oncontextmenu="return false;" src={data.placeholderImage.childImageSharp.fluid.src} />
  ) 
}

export default DevImage
