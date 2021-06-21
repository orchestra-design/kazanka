import * as React from 'react'
import { graphql } from 'gatsby'

import { IndexBody } from '../components/index-body/index'
import { Layout } from '../components/layout/index'

function IndexPage({ data }) {
  return (
    <Layout>
      <IndexBody data={data.prismicIndex.data} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    prismicIndex(uid: { eq: "next" }) {
      data {
        faq {
          answer {
            html
          }
          question {
            text
          }
        }
        layers {
          layerid
          layerimage {
            alt
            url
            dimensions {
              height
              width
            }
          }
          layername {
            text
          }
        }
        highlights {
          highlightsid
          highlightsimage {
            alt
            dimensions {
              width
              height
            }
            url
          }
          highlightsname {
            text
          }
          parklink {
            uid
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
              richtext {
                html
              }
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
                embed_url
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
        subtitle {
          text
        }
        video {
          url
        }
      }
    }
    allPrismicPark {
      nodes {
        data {
          title {
            text
          }
        }
        uid
      }
    }
  }
`

export default IndexPage
