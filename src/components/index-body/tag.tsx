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
        bottom: 4em;
        left: 50vw;
        transform: translateX(-50%);
      `}
    >
      <Tag tag={tag} {...props} />
    </div>
  )
}
