import * as React from 'react'
import { Global } from '@emotion/core'
import { useFavicon } from 'react-use'

import '../../fonts/sofia/stylesheet.css'
import './globals.css'

import globalStyles from './global'
import { layoutStyles } from './styles'

import * as favicon from './favicon.png'

export function Layout({ children }) {
  useFavicon(favicon)

  return (
    <div css={layoutStyles}>
      <Global styles={globalStyles} />
      {children}
    </div>
  )
}
