import * as React from 'react'
import { graphql } from 'gatsby'

function IndexPage({ data }) {
  console.log(data)
  return <div>Poop</div>
}

export const pageQuery = graphql`
  query IndexQuery {
    prismicIndex {
      data {
        body {
          ... on PrismicIndexBodyBlock {
            primary {
              name
            }
          }
          ... on PrismicIndexBodyImage {
            primary {
              imageimage {
                alt
                url
              }
            }
          }
          ... on PrismicIndexBodyText {
            primary {
              name
              text {
                html
              }
            }
          }
          ... on PrismicIndexBodyVideos {
            items {
              videosrc {
                html
              }
            }
          }
        }
        description {
          html
        }
        image {
          alt
          url
        }
        seodescription
        seokeywords
        tag
        title {
          text
        }
      }
    }
  }
`

export default IndexPage
