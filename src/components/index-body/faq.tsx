import * as React from 'react'
import { useLockBodyScroll } from 'react-use'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'

import { Button } from '../button/index'
import { Popup } from '../popup/index'

import { FaqContent } from './faq-content'

export function Faq({ faq, opened, toggle }) {
  if (!faq || !opened) return null

  useLockBodyScroll(opened)

  return (
    <Popup>
      <div
        css={css`
          ${tw`
            font-sans
            overflow-y-auto
            p-10
          `};
        `}
      >
        <FaqContent faq={faq} />
      </div>
      <Button
        css={css`
          ${tw`absolute`};
          top: 0.5rem;
          right: 0.5rem;
        `}
        color="#0D134A"
        onClick={() => toggle(false)}
        size={0.75}
      >
        ×
      </Button>
    </Popup>
  )
}