import * as React from 'react'
import { graphql } from 'gatsby'
import { get } from 'lodash'

import { Layout } from '../components/layout/index'
import { ParkBody } from '../components/park-body/index'

function ManzaraParkPage({ data }) {
  const links = get(data.prismicIndex, 'data.body', []).find(
    ({ __typename, primary }) =>
      __typename === 'PrismicIndexBodyText' && primary.name === 'links'
  )
  const copy = get(data.prismicIndex, 'data.body', []).find(
    ({ __typename, primary }) =>
      __typename === 'PrismicIndexBodyText' && primary.name === 'copy'
  )
  return (
    <Layout links={links} copy={copy}>
      <ParkBody data={data.prismicPark.data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ManzaraParkQuery($uid: String!) {
    prismicPark(uid: { eq: $uid }) {
      data {
        title {
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
  }
`

export default ManzaraParkPage
