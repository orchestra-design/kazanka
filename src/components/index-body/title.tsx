import * as React from 'react'
import { words } from 'lodash'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

import { Frame } from '../frame/index'

const frameStyles = css`
  ${tw`w-20 px-2 `};
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
        ${tw`relative flex flex-row flex-no-wrap items-center justify-center  md:mt-0`};
        margin-top: 6rem;
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
          ${tw`flex flex-col items-center justify-center text-xl leading-none text-white uppercase  md:flex-row md:flex-no-wrap md:text-2xl`};
        `}
      >
        <span
          css={css`
            ${lightStyles};
          `}
        >
          {first} {second}
        </span>
        <span
          css={css`
            ${tw`font-bold md:pt-1`};
            letter-spacing: 0.15em;
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
