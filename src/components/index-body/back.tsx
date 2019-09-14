import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

import { Img } from '../img/index'

export function Back({ image }) {
  return (
    <div
      css={css`
        ${tw`
          absolute
          w-screen h-screen
          overflow-hidden
        `};
        &::after,
        &::before {
          ${tw`
            block
            absolute inset-0 top-auto
            w-full
            bg-white
          `};
          content: '';
          height: 30rem;
          z-index: 1;
        }
        &::before {
          transform: rotateZ(-10deg)  translate(10%, 95%);
        }
        &::after {
          transform: rotateZ(10deg) translate(-10%, 95%);
        }
      `}
    >
      <div
        css={css`
          ${tw`absolute inset-0 object-center object-cover`};
          &::after {
            ${tw`block absolute inset-0`};
            content: '';
            background: linear-gradient(
              180deg,
              rgba(49, 101, 181, 0) 0%,
              rgba(49, 101, 181, 100) 100%
            );
          }
        `}
      >
        <Img
          src={image}
          css={css`
            ${tw`w-full h-full`};
          `}
        />
      </div>
    </div>
  )
}
