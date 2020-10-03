import * as React from 'react'
import { graphql } from 'gatsby'

import { IndexBody } from '../components/index-body/index'
import { Layout } from '../components/layout/index'

function PrincipsPage({ data }) {
  return (
    <Layout>
      <IndexBody data={data.prismicPrincips.data} />
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
          # ... on PrismicPrincipsBodyImage {
          #   id
          #   items {
          #     imgcaption
          #     imgimage {
          #       url
          #       fluid(maxWidth: 1920, quality: 80, jpegProgressive: true) {
          #         ...GatsbyImageSharpFluid_noBase64
          #       }
          #     }
          #     imgvideo {
          #       html
          #     }
          #   }
          # }
          ... on PrismicPrincipsBodyImageCaption {
            id
            primary {
              iwcimage {
                url
                # fluid(maxWidth: 1920, quality: 80, jpegProgressive: true) {
                #   ...GatsbyImageSharpFluid_noBase64
                # }
              }
              iwctext {
                html
              }
            }
          }
          # ... on PrismicPrincipsBodyText {
          #   id
          #   primary {
          #     text {
          #       html
          #     }
          #   }
          # }
          # ... on PrismicPrincipsBodyVideos {
          #   id
          #   items {
          #     text {
          #       html
          #     }
          #     videosrc {
          #       html
          #     }
          #   }
          #   primary {
          #     videotitle {
          #       text
          #     }
          #   }
          # }
        }
      }
    }
  }
`

export default PrincipsPage
