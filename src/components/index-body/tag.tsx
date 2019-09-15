import * as React from 'react'
import { css } from '@emotion/core'
import { useInView } from 'react-intersection-observer'
import tw from 'tailwind.macro'

import { Tag } from '../tag/index'

export function StickedTag({
  tag,
  noStick,
  ...props
}: Readonly<{ tag: string; noStick?: number }>) {
  const [ref, inView] = useInView({
    threshold: 0,
  })

  return (
    <div
      ref={ref}
      css={css`
        ${tw`
          absolute
        `};
        bottom: 4em;
        left: 50vw;
      `}
    >
      <Tag
        styles={css`
          ${!noStick && !inView && tw`fixed`};
          left: ${!noStick && !inView && 0};
          max-width: ${!noStick && !inView && '200px'};
          top: ${!noStick && !inView && '2em'};
          z-index: ${!noStick && !inView && 1000};
          & #shadow {
            fill: ${!noStick && !inView && 'rgba(0, 0, 0, 0.5)'};
            transform: translate(0, 3px) scale(1.025);
          }
        `}
        {...props}
      />
    </div>
  )
}
