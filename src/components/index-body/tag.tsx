import * as React from 'react'
import { css } from '@emotion/core'

import tw from 'tailwind.macro'

import { Tag } from '../tag/index'

export function BodyTag({
  tag,
  ...props
}: Readonly<{ tag: string; textColor?: string }>) {
  return (
    <div
      css={css`
        ${tw`
          absolute
        `};
        bottom: 1.5em;
        left: 50vw;
        transform: translateX(-50%);

        @media (min-width: 768px) {
          bottom: 4em;          
        }
      `}
    >
      <Tag tag={tag} {...props} />
    </div>
  )
}
