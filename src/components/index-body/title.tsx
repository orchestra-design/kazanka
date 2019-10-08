import * as React from 'react'
import { words } from 'lodash'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

import { Frame } from '../frame/index'

const frameStyles = css`
  ${tw`
    px-2
    w-20
  `};
`

const lightStyles = css`
  ${tw`md:mr-1 md:pt-1`};
  font-weight: 200;
  @media (min-width: 768px) {
    letter-spacing: 0.05em;
  }
`

export function Title({ title }: Readonly<{ title: string }>) {
  const [first, second, third] = words(title)
  return (
    <div
      css={css`
        ${tw`
          flex flex-row flex-no-wrap
          items-center justify-center
        `};
        padding-bottom: 20vh;
      `}
    >
      <Frame
        css={css`
          ${frameStyles};
          transform: rotateZ(180deg);
        `}
        color="#FFF"
      />
      <h1
        css={css`
        ${tw`
          flex flex-col
          md:flex-row md:flex-no-wrap
          items-center justify-center
          text-xl md:text-2xl
          leading-none
          uppercase
          text-white
        `};
      `}
      >
        <span
          css={css`
            letter-spacing: 0.03em;
            ${lightStyles};
          `}
        >
          {first}
        </span>
        <span
          css={css`
            letter-spacing: 0.08em;
            ${lightStyles};
          `}
        >
          {second}
        </span>
        <span css={css`
        ${tw`font-bold md:pt-1`};
        letter-spacing: 0.01em;
        @media (min-width: 768px) {
          letter-spacing: 0.02em;
        }
      `}
        >
          {third}
        </span>
      </h1>
      <Frame css={frameStyles} color="#FFF" />
    </div>
  )
}
