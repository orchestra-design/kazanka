import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
// import {useMedia} from 'react-use'

import { Img } from '../img/index'
import { Shape } from '../shape/index'

// import { BackVideo } from './back-video'

export function Back({ image, color = '#fff' }) {
  // const isWide = useMedia('(min-width: 768px)')

  return (
    <div
      css={css`
        ${tw`absolute inset-0 overflow-hidden `};
      `}
    >
      <div
        css={css`
          ${tw`absolute inset-0 object-cover object-center`};
          &::after {
            ${tw`absolute inset-0 block`};
            content: '';
            background: rgba(0, 0, 0, 0.25);
          }
        `}
      >
        <Img
          src={image}
          css={css`
            ${tw`w-full h-full`};
          `}
        />
        {/* isWide && <BackVideo video={video} /> */}
        <div
          css={css`
            ${tw`absolute z-10 w-full `};
            bottom: 0;
            transform: translateY(20%);
          `}
        >
          <Shape color={color} />
        </div>
      </div>
    </div>
  )
}
