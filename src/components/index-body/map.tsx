import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { useLockBodyScroll } from 'react-use'

import { Button } from '../button/index'
import { Popup } from '../popup/index'
import { HTML } from '../html/index'

import { frameStyles, TextContainer } from './styles'

export function Map({ text, opened, togglePopup }) {
  if (!opened) return null

  useLockBodyScroll(opened)

  return (
    <Popup>
      <Button
        css={css`
          ${tw`absolute`};
          top: 0.5rem;
          right: 0.5rem;
        `}
        onClick={() => togglePopup(false)}
        size={0.75}
      >
        Закрыть
      </Button>
      <TextContainer>
        <HTML>{text}</HTML>
      </TextContainer>
      <iframe
        css={frameStyles}
        src="https://nzta.mysocialpinpoint.com/ashley2belfast?_ga=2.58973867.705725962.1568454752-1500795113.1568454752#/"
        scrolling="false"
      />
    </Popup>
  )
}
