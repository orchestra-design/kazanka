import * as React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Layout } from '../components/layout/index'
import { ParkBody } from '../components/park-body/index'

function ManzaraParkPage({ data }) {
  return (
    <Layout>
      <ParkBody data={data.prismicPark.data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ManzaraParkQuery {
    prismicPark(uid: { eq: "manzara" }) {
      data {
        title {
          text
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
        body {
          __typename
          ... on PrismicParkBodyImage {
            items {
              imgimage {
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
              imgcaption
              imgvideo {
                html
              }
            }
          }
          ... on PrismicParkBodyImageCaption {
            slice_label
            primary {
              iwcimage {
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
              iwctext {
                html
              }
            }
          }
          ... on PrismicParkBodyText {
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicParkBodyVideos {
            primary {
              videotitle {
                html
              }
            }
            items {
              text {
                html
              }
              videosrc {
                html
              }
            }
          }
          ... on PrismicParkBodyLink {
            primary {
              link {
                url
              }
              linktitle {
                text
              }
              linktext {
                html
              }
            }
          }
          ... on PrismicParkBodyTwoColumnText {
            slice_label
            items {
              leftcol {
                html
              }
              righttext {
                html
              }
            }
          }
        }
      }
    }
  }
`

export default ManzaraParkPage
