import * as React from 'react'
import { graphql } from 'gatsby'

import { IndexBody } from '../components/index-body/index'
import { Layout } from '../components/layout/index'

function PreviousPage({ data }) {
  return (
    <Layout>
      <IndexBody data={data.prismicIndex.data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PreviousQuery {
    prismicIndex(uid: { eq: "previous" }) {
      data {
        faq {
          answer {
            html
          }
          question {
            text
          }
        }
        body {
          __typename
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
            items {
              imageimages {
                alt
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 360, quality: 80, jpegProgressive: true) {
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
            items {
              link {
                url
              }
              name
            }
          }
          ... on PrismicIndexBodyVideos {
            primary {
              videotitle {
                text
              }
            }
            items {
              videosrc {
                html
                thumbnail_url
                title
              }
              text {
                html
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
        video {
          url
        }
      }
    }
  }
`

export default PreviousPage
