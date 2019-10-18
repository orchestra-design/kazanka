import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { get } from 'lodash'
import * as uuid from 'uuid/v1'

import { HTML } from '../html/index'
import { Img } from '../img/index'

import * as back from './back.svg'
import { videoFrameStyles, headingStyles, frameWhiteHeadingStyles } from './styles'

export function Videos({ items, title }) {
  if (!items) return null

  const [current, setCurrent] = React.useState<number>(0)

  return (
    <section
      css={css`
        ${tw`
          bg-contain bg-no-repeat
          bg-theme-indigo
          w-full h-full      
          px-8 py-12
          mt-16
        `};
        background-image: url(${back});
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
                text-2xl
                pt-8 md:pb-12
              `};
              ${tw`
                font-sans
                font-light
                mx-auto
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
            items-center justify-between
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
              px-8
              w-3/4 md:w-1/2
            `};
            flex: 1 50%;
          `}
        >
          <HTML
            css={css`
              ${tw`
                overflow-y-auto
                max-h-full
                text-sm
                text-white
              `};
            `}
          >
            {get(items, [current, 'text', 'html'], null)}
          </HTML>
        </div>
        <HTML
          css={css`
            ${videoFrameStyles};
            ${tw`
              w-full
            `};
            flex: 1 0 50vh;

            @media (min-width: 768px) {
              flex: 1 100%;
            }
          `}
        >
          {get(items, [current, 'videosrc', 'html'], null)}
        </HTML>
        <div
          css={css`
            ${tw`
              mt-4 md:mt-0
              mx-auto
              max-h-full
              w-full
              overflow-x-auto
              md:overflow-y-auto
            `};

            height: 100px;
            flex: 0 0 100px;

            @media (min-width: 768px) {
              flex: 0 0 200px;
              height: 100%;
              width: 200px;
            }
          `}
        >
          <div
            css={css`
              ${tw`
                flex flex-row md:flex-col
                flex-no-wrap
                items-end justify-start
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
                    flex: 0 0 auto;
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
      </div>
    </section>
  )
}
