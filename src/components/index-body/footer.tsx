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
        &,
        &::after,
        &::before {
          background-color: #60b2ff;
        }
        &::after,
        &::before {
          ${tw`
            block
            absolute inset-0 bottom-auto
            w-full
          `};
          content: '';
          height: 30rem;
          z-index: 1;
        }
        &::before {
          transform: rotateZ(-10deg) translate(10%);
        }
        &::after {
          transform: rotateZ(10deg) translate(-10%);
        }
      `}
    >
      <TextContainer css={css`${tw`relative z-10`}`}>
        <HTML>{text}</HTML>
      </TextContainer>
    </div>
  )
}
