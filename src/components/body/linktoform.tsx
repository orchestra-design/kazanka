import * as React from 'react'
import { css } from '@emotion/core'
import { get } from 'lodash'

import { TextContainer } from './styles'
import { HTML } from '../html/index'

export function LinkToForm({ primary }) {
  if (!primary) return null

  const url = get(primary, 'link.url')
  const title = get(primary, 'linktitle.text')
  const text = get(primary, 'linktext.html')
  return (
    <section className="w-full h-full px-8 py-4 mb-12 font-sans bg-no-repeat bg-contain bg-theme-yellow-green md:py-12">
      <div className="flex flex-col flex-no-wrap w-full max-w-3xl mx-auto mb-12 md:flex-row">
        <div
          className="relative flex-grow flex-shrink-0 md:min-w-1/2 bg-theme-red"
          css={css`
            &::before {
              content: '';
              display: block;
              position: absolute;
              width: 1rem;
              height: 1rem;
              bottom: 0;
              left: 50%;
              background-color: #ee5658;
              transform: translate(-50%, 50%) rotateZ(45deg);
            }
          `}
        >
          <a
            className="block px-4 py-8 text-center text-white md:whitespace-no-wrap"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {title}
          </a>
        </div>
        <div className="pt-8 md:w-1/2 md:pt-0 md:pl-8">
          <TextContainer>
            <HTML>{text}</HTML>
          </TextContainer>
        </div>
      </div>
    </section>
  )
}
