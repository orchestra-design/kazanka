import * as React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout/index'
import { ParkBody } from '../components/park-body/index'

function ParkPage({ data }) {
  return (
    <Layout>
      <ParkBody data={data.prismicPark.data} parks={data.allPrismicPark.nodes} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ParkQuery($uid: String!) {
    prismicPark(uid: { eq: $uid }) {
      data {
        orderid
        title {
          text
        }
        subtitle {
          text
        }
        info {
          html
          text
        }
        color
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
              imgcaption {
                html
              }
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
          # ... on PrismicParkBodyTwoColumnText {
          #   slice_label
          #   items {
          #     leftcol {
          #       html
          #     }
          #     righttext {
          #       html
          #     }
          #   }
          # }
          ... on PrismicParkBodyDigits {
            items {
              richtext {
                html
              }
            }
          }
        }
      }
    }
    allPrismicPark(sort: {fields: data___orderid, order: ASC}) {
      nodes {
        data {
          orderid
          title {
            text
          }
        }
        uid
      }
    }
  }
`

export default ParkPage
