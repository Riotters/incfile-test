import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//...GatsbyImageSharpFluid_withWebp_noBase64

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1800) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })

      if (!image) {
        return null
      }

      const imageFluid = image.node.childImageSharp.fluid

      return <Img alt={props.alt} fluid={imageFluid} />
    }}
  />
)
export default Image