import * as React from 'react'
import { graphql } from 'gatsby'

import { PrincipsBody } from '../components/princips-body/index'
import { Layout } from '../components/layout/index'

function PrincipsPage({ data }) {
  return (
    <Layout>
      <PrincipsBody data={data.prismicPrincips.data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query PrincipsQuery {
    prismicPrincips {
      data {
        title {
          text
        }
        body {
          __typename
          ... on PrismicPrincipsBodyText {
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPrincipsBodyImage {
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
            }
          }
          ... on PrismicPrincipsBodyImageCaption {
            primary {
              iwcimage {
                url
                alt
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 640, quality: 80, jpegProgressive: true) {
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
        }
      }
    }
  }
`

export default PrincipsPage
