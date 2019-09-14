import * as React from 'react'
import { graphql } from 'gatsby'

import { IndexBody } from '../components/index-body/index'
import { Layout } from '../components/layout/index'

function IndexPage({ data }) {
  return ( <Layout>
    <IndexBody data={data.prismicIndex.data} />
  </Layout>)
}

export const pageQuery = graphql`
  query IndexQuery {
    prismicIndex {
      data {
        body {
          ... on PrismicIndexBodyImage {
            primary {
              name
              imageimage {
                alt
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 80, jpegProgressive: true) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
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
                thumbnail_url
                title
              }
            }
          }
        }
        image {
          url
          alt
          localFile {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 80, jpegProgressive: true) {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
          }
        }
        description {
          html
        }
        tag
        seokeywords
        seodescription
        title {
          text
        }
      }
    }
  }
`

export default IndexPage
