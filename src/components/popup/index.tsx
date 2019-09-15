import React from 'react'
import { css } from '@emotion/core'

import { wrapperStyles, popupStyles, fadeStyles } from './styles'

export function Popup(props: any) {
  return (
    <div css={wrapperStyles}>
      <div css={fadeStyles} />
      <div
        css={css`
          ${popupStyles};
          ${props.styles};
        `}
      >
        {props.children}
      </div>
    </div>
  )
}
