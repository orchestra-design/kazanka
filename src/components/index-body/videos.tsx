import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { get } from 'lodash'
import * as uuid from 'uuid/v1'

import { HTML } from '../html/index'
import { Img } from '../img/index'

import { videoFrameStyles } from './styles'

export function Videos({ items }) {
  if (!items) return null

  const [current, setCurrent] = React.useState<number>(0)

  return (
    <section
      css={css`
        ${tw`
          w-full h-full      
          p-8
        `};
        background-color: #09234a;
      `}
    >
      <div
        css={css`
          ${tw`
            flex flex-col md:flex-row flex-no-wrap
            items-start justify-between
            mx-auto
            w-full max-w-3xl
          `};
          max-height: 80vh;
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
