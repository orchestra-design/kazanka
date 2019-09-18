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
          relative
          bg-theme-teal
        `};
        bottom: 0;
      `}
    >
      <Pattern
        css={css`
          ${patternStyles};
          right: 0;
          transform: translate(1rem, -90%);
        `} />
      <Pattern
        css={css`
          ${patternStyles};
          left: 0;
          transform: translate(-1rem, -1rem) rotateZ(180deg);
        `}
        color="#FFF"
      />
      <TextContainer css={css`${tw`relative z-10`}`}>
        <HTML>{text}</HTML>
      </TextContainer>
      <Row
        css={css`
          ${tw`mt-16`};
        `}
        gap={1.5}
      >
        {items.map(({ name, link }) => (
          <Col key={uuid()} cols={3} gap={1.5}>
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
          </Col>
        ))}
      </Row>
    </div>
  )
}
