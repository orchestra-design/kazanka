import * as React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout/index'

function ParksPage({ data }) {
  return (
    <Layout>
      <main className="min-h-screen">
        {JSON.stringify(data.allPrismicPark.nodes, null, 2)}
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ParksQuery {
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

export default ParksPage
