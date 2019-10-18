import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { get } from 'lodash'
import * as uuid from 'uuid/v1'

import { HTML } from '../html/index'
import { Img } from '../img/index'

import { videoFrameStyles, headingStyles, frameWhiteHeadingStyles } from './styles'

export function Videos({ items, title }) {
  if (!items) return null

  const [current, setCurrent] = React.useState<number>(0)

  return (
    <section
      css={css`
        ${tw`
          bg-theme-indigo
          w-full h-full      
          px-8 py-12
          mt-16
        `};
      `}
    >
      {title && (
        <div
          css={css`
            ${tw`
              mx-auto
              w-full
              subpixel-antialiased
              text-center
            `};
            & h2 {
              ${headingStyles};
              ${frameWhiteHeadingStyles};
              ${tw`
                text-2xl sm:text-3xl
                pt-8 pb-12
              `};
              ${tw`
                font-sans
                font-light
                mx-auto
                w-full max-w-xl
                subpixel-antialiased
                text-center              
                text-white
              `};
            }
          `}
        >
          <h2>
            {title}
          </h2>
        </div>
      )}
      <div
        css={css`
          ${tw`
            flex flex-col md:flex-row flex-no-wrap
            items-start justify-between
            mx-auto
            w-full max-w-3xl
          `};
        `}
      >
        <HTML
          css={css`
            ${videoFrameStyles};
            ${tw`
              w-full md:w-4/5
            `};
          `}
        >
          {items[current].videosrc.html}
        </HTML>
        <div
          css={css`
            ${tw`
              flex flex-row md:flex-col
              flex-wrap md:flex-no-wrap
              items-end justify-start
              mx-auto
              w-full md:w-1/5
            `};
          `}
        >
          {items.map(({ videosrc }, idx) => {
            if (current === idx) return null

            return (
              <div
                css={css`
                  ${tw`
                    relative
                    cursor-pointer
                    overflow-hidden
                    opacity-50 hover:opacity-100
                  `};
                  width: 150px;
                  height: 100px;
                `}
                key={uuid()}
                onClick={() => setCurrent(idx)}
                title={get(videosrc, 'title', '')}
              >
                <Img
                  css={css`
                    ${tw`absolute w-full h-full`};
                  `}
                  src={{ url: videosrc.thumbnail_url }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
