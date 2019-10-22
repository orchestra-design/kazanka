import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import * as uuid from 'uuid/v1'

import { Frame } from '../frame/index'
import { HTML } from '../html/index'
import { Pattern } from '../pattern/index'
import { Row, Col } from '../row/index'

import { TextContainer } from './styles'

const patternStyles = css`
  ${tw`
    absolute
    w-1/5
  `};
  top: 0;
`

const frameStyles = css`
  ${tw`
    px-2
    w-16
  `};
`

export function Footer({ text, items }) {
  return (
    <div
      css={css`
        ${tw`
          w-full
          py-10
          mt-10
          relative
          bg-theme-teal
        `};
        bottom: 0;
      `}
    >
      <Pattern
        styles={css`
          ${patternStyles};
          right: 0;
          transform: translateY(-90%);
        `}
      />
      <Pattern
        styles={css`
          ${patternStyles};
          left: 0;
          transform: rotateZ(180deg);
        `}
        color="#FFF"
      />
      <div
        css={css`
          ${tw`w-full px-4 max-w-2xl mx-auto`};
        `}
      >
        <TextContainer
          css={css`
            ${tw`relative z-10`};
            & h3 {
              color: #fff !important;
            }
          `}
        >
          <HTML>{text}</HTML>
        </TextContainer>
        <Row
          css={css`
            ${tw`mt-10`};
          `}
          gap={1.5}
        >
          {items.map(({ name, link }) => (
            <div
              css={css`
                ${tw`px-2 mb-8`};
              `}
            >
              <a
                css={css`
                  ${tw`
                    flex flex-row flex-no-wrap
                    items-start justify-center
                    font-semibold text-white
                  `};
                  line-height: 2;
                `}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Frame
                  css={css`
                    ${frameStyles};
                    transform: rotateZ(180deg);
                  `}
                  color="#FFF"
                />
                {name}
                <Frame css={frameStyles} color="#FFF" />
              </a>
            </div>
          ))}
        </Row>
      </div>
    </div>
  )
}
