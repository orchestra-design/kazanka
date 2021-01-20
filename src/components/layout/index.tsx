import * as React from 'react'
import { Global } from '@emotion/core'
import { useFavicon } from 'react-use'
import { useStaticQuery, graphql } from 'gatsby'

import * as uuid from 'uuid/v1'
import { get } from 'lodash'

import { Header } from '../header/index'
import { Footer } from '../index-body/footer'

import '../../fonts/sofia/stylesheet.css'
import './globals.css'

import { HTML } from '../html/index'
import { copyStyles } from '../index-body/styles'
import { TextContainer } from '../index-body/styles'

import globalStyles from './global'
import { layoutStyles } from './styles'

import * as favicon from './favicon.png'

export function Layout({ children }) {
  useFavicon(favicon)
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      prismicIndex(uid: { eq: "next" }) {
        data {
          body {
            __typename
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
          }
        }
      }
    }
  `)
  const links = get(data.prismicIndex, 'data.body', []).find(
    ({ __typename, primary }) =>
      __typename === 'PrismicIndexBodyText' && primary.name === 'links'
  )
  const copy = get(data.prismicIndex, 'data.body', []).find(
    ({ __typename, primary }) =>
      __typename === 'PrismicIndexBodyText' && primary.name === 'copy'
  )

  return (
    <div css={layoutStyles}>
      <Global styles={globalStyles} />
      <Header />
      {children}
      <div>
        {links && (
          <Footer
            key={uuid()}
            text={get(links, 'primary.text.html')}
            items={get(links, 'items')}
          />
        )}
        {copy && (
          <div css={copyStyles} key={uuid()}>
            <TextContainer>
              <HTML>{get(copy, 'primary.text.html')}</HTML>
            </TextContainer>
          </div>
        )}
      </div>
    </div>
  )
}
