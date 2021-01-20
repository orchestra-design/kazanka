import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
import { useLockBodyScroll } from 'react-use'

import { Button } from '../button/index'
import { Popup } from '../popup/index'
import { Images } from '../body/images'

export function ImagePopup({ items, opened, togglePopup }) {
  if (!opened) return null

  useLockBodyScroll(opened)

  return (
    <Popup>
      <div
        css={css`
          ${tw`w-full overflow-y-auto font-sans `};
        `}
      >
        <Images items={items} />
      </div>
      <Button
        css={css`
          ${tw`absolute`};
          top: 0.5rem;
          right: 0.5rem;
        `}
        color="#0D134A"
        onClick={() => togglePopup(0)}
        size={0.75}
      >
        ×
      </Button>
    </Popup>
  )
}
