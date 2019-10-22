import * as React from 'react'
import { css } from '@emotion/core'
import tw from 'tailwind.macro'
// import {useMedia} from 'react-use'

import { Img } from '../img/index'
import { Shape } from '../shape/index'

// import { BackVideo } from './back-video'

export function Back({ image, video }) {
  // const isWide = useMedia('(min-width: 768px)')

  return (
    <div
      css={css`
        ${tw`
          absolute
          inset-0
          overflow-hidden
        `};
      `}
    >
      <div
        css={css`
          ${tw`absolute inset-0 object-center object-cover`};
          /* &::after {
            ${tw`block absolute inset-0`};
            content: '';
            background: linear-gradient(180deg, rgba(41, 178, 192, 0) 0%, rgba(41, 178, 192, 1) 100%);
          } */
        `}
      >
        <Img
          src={image}
          css={css`
            ${tw`w-full h-full`};
          `}
        />
        {/* isWide && <BackVideo video={video} /> */}
        <Shape
          css={css`
            ${tw`
              absolute
              w-full
              z-10
            `};
            bottom: 0;
            transform: translateY(20%);
          `}
        />
      </div>
    </div >
  )
}
