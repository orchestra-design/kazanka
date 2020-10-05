import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { get } from 'lodash'
// import * as uuid from 'uuid/v1'

import { HTML } from '../html/index'
// import { Img } from '../img/index'

import * as back from './back.svg'
import {
  videoFrameStyles,
  // headingStyles,
  // frameWhiteHeadingStyles,
} from './styles'

export function Video({ items, title }) {
  if (!items) return null

  const [current] = React.useState<number>(0)

  return (
    <section
      css={css`
        ${tw`
          bg-contain bg-no-repeat
          bg-theme-yellow
          w-full h-full      
          px-8 py-4 md:py-12
          mt-16
        `};
        @media (min-width: 768px) {
          background-image: url(${back});
        }
      `}
    >
      <div
        css={css`
          ${tw`
            flex flex-col md:flex-row flex-no-wrap
            items-center justify-center
            mx-auto
            w-full
          `};
          @media (min-width: 768px) {
            height: 60vh;
          }
        `}
      >
        <div
          css={css`
            ${tw`
              flex
              items-center justify-center
              h-full
              py-8 md:py-0
              md:px-8
              w-full md:w-1/3
            `};
            flex: 1 50%;
          `}
        >
          <HTML
            css={css`
              ${tw`
                font-sans
                overflow-y-auto
                max-h-full
                text-sm
                text-theme-indigo
              `};

              & h4 {
                ${tw`
                  text-5xl
                `};
              }
            `}
          >
            {get(items, [current, 'text', 'html'], null)}
          </HTML>
        </div>
        <HTML
          css={css`
            ${videoFrameStyles};
            ${tw`
              w-full md:w-2/3
            `};
            flex: 1 0 50vh;

            @media (min-width: 768px) {
              flex: 1 100%;
            }
          `}
        >
          {get(items, [current, 'videosrc', 'html'], null)}
        </HTML>
      </div>
    </section>
  )
}
