import * as React from 'react'
import { Global } from '@emotion/core'

import '../../fonts/open-sans/stylesheet.css'
import '../../fonts/plex/stylesheet.css'
import './globals.css'

import globalStyles from './global'
import { layoutStyles } from './styles'

export function Layout({ children }) {
  return (
    <div css={layoutStyles}>
      <Global styles={globalStyles} />
      {children}
    </div>
  )
}
