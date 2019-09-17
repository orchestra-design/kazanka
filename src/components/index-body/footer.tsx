import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

import { HTML } from '../html/index'

import { TextContainer } from './styles'

export function Footer({ text }) {
  return (
    <div
      css={css`
        ${tw`
          w-full
          py-10
          mt-12
          relative
        `};
        bottom: 0;
        background-color: #60b2ff;
      `}
    >
      <TextContainer css={css`${tw`relative z-10`}`}>
        <HTML>{text}</HTML>
      </TextContainer>
    </div>
  )
}
