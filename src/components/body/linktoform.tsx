import * as React from 'react'
import { css } from '@emotion/core'
import { get } from 'lodash'

import * as back from '../index-body/back.svg'
import { TextContainer } from './styles'
import { HTML } from '../html/index'

export function LinkToForm({ primary }) {
  if (!primary) return null

  const url = get(primary, 'link.url')
  const title = get(primary, 'linktitle.text')
  const text = get(primary, 'linktext.html')
  return (
    <section
      className={`
          font-sans
          bg-contain bg-no-repeat
          bg-theme-yellow
          w-full h-full
          px-8 py-4 md:py-12
          mb-12
        `}
      css={css`
        @media (min-width: 768px) {
          background-image: url(${back});
        }
      `}
    >
      <div className="w-full max-w-3xl mx-auto mb-12 flex flex-col md:flex-row flex-no-wrap">
        <div
          className="md:min-w-1/2 flex-shrink-0 flex-grow relative bg-theme-red"
          css={css`
            box-shadow: 0.35rem 0.35rem 0 0 #0d134a;

            &::before {
              content: '';
              display: block;
              position: absolute;
              width: 1rem;
              height: 1rem;
              bottom: 0;
              left: 50%;
              background-color: #ee5658;
              box-shadow: 0.35rem 0.1rem 0 0 #0d134a;
              transform: translate(-50%, 50%) rotateZ(45deg);
            }
          `}
        >
          <a
            className="block px-4 py-8 text-white md:whitespace-no-wrap text-center"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {title}
          </a>
        </div>
        <div className="md:w-1/2 pt-8 md:pt-0 md:pl-8">
          <TextContainer>
            <HTML>{text}</HTML>
          </TextContainer>
        </div>
      </div>
    </section>
  )
}
