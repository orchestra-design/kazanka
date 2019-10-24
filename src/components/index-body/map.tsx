import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { useLockBodyScroll } from 'react-use'

import { Button } from '../button/index'
import { Popup } from '../popup/index'

import { frameStyles } from './styles'

export function Map({ /* text, */ opened, togglePopup }) {
  if (!opened) return null

  useLockBodyScroll(opened)

  return (
    <Popup>
      <Button
        css={css`
          ${tw`absolute`};
          bottom: 0.5rem;
          left: 0.5rem;
        `}
        onClick={() => togglePopup(false)}
        size={0.75}
      >
        ×
      </Button>
      <iframe
        css={frameStyles}
        src="https://kazanka_river.mysocialpinpoint.com/kanzaka/map"
        scrolling="false"
      />
    </Popup>
  )
}
