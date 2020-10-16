import * as React from 'react'
import { graphql } from 'gatsby'

import { IndexBody } from '../components/index-body/index'
import { Layout } from '../components/layout/index'

function EngagementPage({ data }) {
  return (
    <Layout>
      <IndexBody data={data.prismicEngagement.data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query EngagementQuery {
    prismicEngagement {
      data {
        body {
          ... on PrismicEngagementBodyImage {
            id
            items {
              imgcaption
              imgimage {
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 80, jpegProgressive: true) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
              imgvideo {
                html
              }
            }
          }
          ... on PrismicEngagementBodyImageCaption {
            id
            primary {
              iwcimage {
                url
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920, quality: 80, jpegProgressive: true) {
                      ...GatsbyImageSharpFluid_noBase64
                    }
                  }
                }
              }
              iwctext {
                html
              }
            }
            slice_label
          }
          ... on PrismicEngagementBodyText {
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicEngagementBodyVideos {
            id
            items {
              text {
                html
              }
              videosrc {
                html
              }
            }
            primary {
              videotitle {
                text
              }
            }
          }
        }
        title {
          text
        }
      }
    }
  }
`

export default EngagementPage
